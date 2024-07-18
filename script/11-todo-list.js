const todoList = [{
    name: 'make dinner',
    duedate: '2022-12-22'},
    {name: 'wash dishes',
    duedate: '2022-12-22'
    } ];

renderTodoList();
function renderTodoList(){
    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const {name,duedate} = todoObject;
        
        const html =
         `<p>
         ${name} ${duedate}
         <button onclick="
         todoList.splice(${i},1);
         renderTodoList();
         ">Delete</button>
         </p>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}


function ToDo(){
    const inputElement = document.querySelector('.js-input-name');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);
    
    inputElement.value = '';
    renderTodoList();
}