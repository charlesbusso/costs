import ProjectForm from '../Projects/ProjectForm'
import styles from './NewProjects.module.css'

function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projetos</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            
            <ProjectForm/>
            </div>

    )
}

export default NewProject