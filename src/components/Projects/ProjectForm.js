import {useEffect, useState} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({ handleSubmit, btnText, projectData}){
    const [categories, setCategories]= useState([])
    const [project, setProject]= useState(projectData || {})

   useEffect(()=>{
    fetch('https://localhost:5000/categories',{
        method: 'GET',
        headers: {
            'Content-Type': 'applications/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log (err))
   }, [])
   const submit=(e)=>{
    e.preventDefault()
    handleSubmit(project)

   }
   function handleChange(e){
    setProject({...project, [e.target.name]: e.target.value})

   }
   function handleCategory(e){
    setProject({
        ...project,
        category: {
        id: e.target.value,
        name: e.target.options [e.target.selectedIndex].text,
    },
   })

   }
    return(
        <form onSubmit ={submit} className = {styles.form}>
          <Input type="text"
           text= "nome do Projeto"
            name="name"
             placeholder="Insira o nome do Projeto" 
             handleOnChange={handleChange}
             />
            <Input
            type="number"
            text="Orçamento do Projeto"
            name="Valor total"
            placeholder="Insira o Orçamento total"
            handleOnChange={handleChange}
            />
            
            <Select
             name="category_id"
             text="Selecione a categoria"
            options={categories}
            handleOnChange={handleCategory}
            />
            
            <SubmitButton text={btnText}/>
        </form>

    )

}
export default ProjectForm
