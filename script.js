// const input = document.querySelector('.taskInput')
// const ul = document.querySelector('ul')
// const addButton = document.querySelector('.addBtn')
// const removeAllBtn = document.querySelector('.removeAllBtn')


// addButton.addEventListener("click", function(event) {
//     event.preventDefault()
//     addItem();
// })

// removeAllBtn.addEventListener("click", function(event) {
//     event.preventDefault()
//     removeAllTasks()
// })

// function addItem(){
//     const inputValue = input.value
//     const newLi = document.createElement('li')

//     if (inputValue === "" || inputValue === " " || inputValue === "   ") {
//         alert("Please enter a task");
//         return false;
//     }

//     //! REMOVE BTN
//     const removeBtn = document.createElement('button')
//     removeBtn.innerHTML = 'REMOVE'
//     removeBtn.classList.add('remove')

//     //! EDIT BTN
//     const editBtn = document.createElement('button')
//     editBtn.innerHTML = 'EDIT'
//     editBtn.classList.add('edit')
//     editBtn.setAttribute("data-action", "edit");
//     editBtn.type = 'button'
//     editBtn.addEventListener("click", function() {
//         editTask(newLi);
//     });

//     newLi.innerHTML = inputValue
//     ul.appendChild(newLi)
//     newLi.appendChild(removeBtn)
//     newLi.appendChild(editBtn)
//     input.value = ''

//     //! REMOVE BUTTON
//     removeBtn.addEventListener("click", function() {
//         newLi.remove()
//     })
// }

// function removeAllTasks() {
//     const taskList = document.querySelector('.list')
//     const taskItems = taskList.querySelectorAll('li')
//     taskItems.forEach(function(taskItem) {
//       taskList.removeChild(taskItem)
//     })
// }

// function editTask(listItem) {
//     let taskText = listItem.firstChild.textContent;
//     let newTaskText = prompt("Edit task:", taskText);
//     if (newTaskText !== null) {
//         listItem.firstChild.textContent = newTaskText;
//     }
// }


const input = document.querySelector('.taskInput')
const ul = document.querySelector('ul')
const addButton = document.querySelector('.addBtn')
const removeAllBtn = document.querySelector('.removeAllBtn')


addButton.addEventListener("click", function(event) {
    event.preventDefault()
    addItem();
})

removeAllBtn.addEventListener("click", function(event) {
    event.preventDefault()
    removeAllTasks()
})

function addItem(){
    const inputValue = input.value
    const newLi = document.createElement('li')

    if (inputValue === "" || inputValue === " " || inputValue === "   ") {
        alert("Please enter a task");
        return false;
    }

    //! CONTAINER
    const container = document.createElement('div')
    container.classList.add('task-container')

    //! TEXT
    const taskText = document.createElement('span')
    taskText.textContent = inputValue
    container.appendChild(taskText)

    //! REMOVE BTN
    const removeBtn = document.createElement('button')
    removeBtn.innerHTML = 'REMOVE'
    removeBtn.classList.add('remove')
    container.appendChild(removeBtn)

    //! EDIT BTN
    const editBtn = document.createElement('button')
    editBtn.innerHTML = 'EDIT'
    editBtn.classList.add('edit')
    editBtn.setAttribute("data-action", "edit");
    editBtn.type = 'button'
    editBtn.addEventListener("click", function() {
        editTask(newLi);
    });
    container.appendChild(editBtn)

    newLi.appendChild(container)
    ul.appendChild(newLi)
    input.value = ''

    //! REMOVE BUTTON
    removeBtn.addEventListener("click", function() {
        newLi.remove()
    })
}

function removeAllTasks() {
    const taskList = document.querySelector('.list')
    const taskItems = taskList.querySelectorAll('li')
    taskItems.forEach(function(taskItem) {
      taskList.removeChild(taskItem)
    })
}

function editTask(listItem) {
    let taskText = listItem.querySelector('.task-container span').textContent;
    let newTaskText = prompt("Edit task:", taskText);
    if (newTaskText !== null) {
        listItem.querySelector('.task-container span').textContent = newTaskText;
    }
}



