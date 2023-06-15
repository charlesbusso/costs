import {useNavigate} from 'react-router-dom'

import ProjectForm from '../Projects/ProjectForm'
import styles from './NewProjects.module.css'

function NewProject(){
    const history = useNavigate()
    function createPost(project){
        // inicia o projeto costs com zero
        project.cost = 0
        project.services = []

       fetch('http://localhost:3000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            history.push('/projects', {message: 'Projeto criado com sucesso !!'})
        })
        
    }


    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projetos</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
            </div>

    )
}

export default NewProject