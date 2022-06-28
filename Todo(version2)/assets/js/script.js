let colorTemplate = document.querySelectorAll('.color')
let todoInput = document.querySelector('input')
let todoArea = document.querySelector('.todos')
let addTodo = document.querySelector('.addTodo')
let reset = document.querySelector('.reset')

colorTemplate.forEach(function(color){
    color.addEventListener('click',function(event){
        let setColor=event.target.style.backgroundColor
        todoInput.style.backgroundColor=setColor
    })
})

function resetInputData(){
    todoInput.value=''
    todoInput.style.backgroundColor='#c2c2c2'
}

function addTodoItem(){
    let BackgroundProperty =todoInput.style.backgroundColor
    let inputValue = todoInput.value
    let todo = document.createElement('div')
    todo.className='todo'
    todo.style.backgroundColor=BackgroundProperty
    todo.innerHTML=inputValue
    todoArea.append(todo)
    resetInputData()
    let todosList_ = document.querySelectorAll('.todo')
    todosList_.forEach(function(todos2){
        todos2.addEventListener('click',function(event){
            event.target.remove()
        })
    })
}
todoInput.addEventListener('keydown',function(event){
    if(event.keyCode===13){
        if(todoInput.value){
            addTodoItem()
        }
    }
})

reset.addEventListener('click',resetInputData) 
addTodo.addEventListener('click',function(){
    if(todoInput.value){
        addTodoItem()
    }
})
