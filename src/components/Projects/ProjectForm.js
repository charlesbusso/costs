function ProjectForm(){
    return(
        <form>
            <div><input type = "text" placeholder="Insira o nome doprojeto"/></div>
            <div><input type =" number" placeholder="Insira o orçamento total"/></div>
            <div>
                <select name=" Category_id">
                    <option disabled selected>Selecione a categoria</option>
                    </select>
            </div>
            <div>
               <input type = "submit" value="Cirar Projeto"/>
            </div>
        </form>

    )

}
export default ProjectForm
