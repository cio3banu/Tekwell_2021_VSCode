const todoList = [];

const startApp = () => {
  showTodoList(todoList);
  
}


const showTodoList = () => {
  const todosContainer = document.getElementById("todos");
  todosContainer.innerHTML = '';

  todoList.forEach(element => {
    const newElement = document.createElement("li");  
    newElement.innerHTML = `${element} <span>X</span>`;
    todosContainer.append(newElement);
  });
};

const createTodo = (text) => {
  if(todoList){
    todoList.push(text);
    console.log(todoList);
    return todoList;
  }
  return [];  
}


const deleteTodo = (index) => {
  todoList.splice(index, 1);
}

document.addEventListener("DOMCOntentLoaded", () =>{
  startApp();
});

document.getElementById("createTodoBtn").addEventListener("click", () => {
  createTodo(document.getElementById("newTodo").value);
  document.getElementById("newTodo").value = '';
  showTodoList();

  document.querySelectorAll("#todos li span").forEach((element, index) => {
    element.addEventListener("click", () => {
      deleteTodo(index);
      showTodoList();
    })
  });
});

