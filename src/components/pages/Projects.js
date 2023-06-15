import {useLocation} from 'react-router-dom'
import Message from "../Layout/Message"

import styles from './Projects.module.css'
import Container from '../Layout/Container'
import Loading from '../Layout/Loading'
import LinkButton from './LinkButton'
import ProjectCard from '../Projects/ProjectCard'
import { useState, useEffect } from 'react'

function Projects(){
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(()=>{
            fetch('http://localhost:3000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(data => {
            setProjects(data)
            setRemoveLoading(true)

        })
        }, 3000)

    }, [])
    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to= "/newproject" text = "Criar Projetos"/>
                
            </div>
           {message &&  <Message type= "success" msg= {message}/>}
           <Container customClass="start">
            {projects.length > 0 && 
            projects.map((project) => (
                <ProjectCard
                id={project.id}
                 name = {project.name}
                 budget={project.budget}
                 category={project.category.name}
                 key={project.id}
                 /> ))}
                 {!removeLoading && <Loading />}
                 {removeLoading && projects.length === 0 &&(
                    <p>Não Projetos cadastrados !</p>
                 )
                 }

           </Container>

        </div>
    )
}
export default Projects