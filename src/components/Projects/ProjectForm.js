import {useEffect, useState} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({btnText}){
    const [categories, setCategories]= useState([])

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
    .catch((err) => (err))
   }, [])
    return(
        <form className = {styles.form}>
          <Input type="text"
           text= "nome do Projeto"
            name="name"
             placeholder="Insira o nome do Projeto"/>
            <Input
            type="number"
            text="Orçamento do Projeto"
            name="Valor total"
            placeholder="Insira o Orçamento total"/>
            
            <Select name="category_id "text="Selecione a categoria"
            options={categories}
            />
            
            <SubmitButton text={btnText}/>
        </form>

    )

}
export default ProjectForm
