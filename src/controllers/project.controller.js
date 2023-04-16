import { Project } from "../models/Project.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
    
        res.json(projects);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
} 

export const getProject = async (req, res) => {
    try {
        const idProject = req.params.id;

        const project = await Project.findByPk(idProject)

        if (project === null) {
            return res.status(404).json({message: 'Projecto no existente'})
        } else {
            res.send(project)
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createProject = async (req, res) => {
    try {
        const { name, priority, description} = req.body;
    
        const newProject = await Project.create({
            name,
            description,
            priority
        });

        res.json(newProject);    
    } catch (error) {
        res.status(500).json({message: error.message});    
    }
}

export const updateProject = async (req, res) => {
    try {
        const idProject = req.params.id;
        
        const newData = req.body;

        let project = await Project.findByPk(idProject)

        if (project === null) {
            return res.status(404).json({message: 'Projecto no existente'})
        } else {
            project.name = newData.name

            project.save()

            res.send('Proyecto modificado correctamente')
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteProject = async (req, res) => {
    try {
        const idProject = req.params.id;

        const deleted = await Project.destroy({
            where: {
                id: idProject
            }
        })

        if (deleted === 0) {
            return res.status(404).json({message: 'No se encontro el projecto a eliminar en la base de datos.'})
        } else {
            res.sendStatus(204);
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}