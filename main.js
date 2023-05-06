function addNewTask(){
    //irá pegar os elementos da lista
    var list = document.getElementById("list");

    //valor digitado será guardado dentro variavel text
    var text = document.getElementById("task_name").value;

    //valida a lista
    if(text.length==0){
        alert('Tarefa inválida')
        return;
    }
    //crio elemento para mostrar os resultados
    var listItem = document.createElement("li");
    listItem.className="list-item" //para pagar estilo CSS

    //chamo as funções
    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);

}