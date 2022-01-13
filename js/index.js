window.onload = function () {
}

function addByEnter() {
    if (window.event.keyCode == 13) {
        addTodoList();
    }
}

function addTodoList() {
    console.log('test');
    const addValue = document.getElementById('add_input').value
    const mainUl = document.getElementById(`list_ul`)
    if (addValue !== '') {
        var addLi = document.createElement('li');
        addLi.innerHTML =
            `<li class="todo_list_li" 
                 id=todo_list_li_${new Date().valueOf()}>
                    <input type="checkbox" class="todo_list_li_checkbox"/>
                    ${addValue}
                    <span
                        class="delete_btn"
                        onclick='deleteTodoList(event)'>
                    </span>
            </li>`;   
        mainUl.appendChild(addLi);
        document.getElementById('add_input').value = ''
    } else {
        alert('할일을 입력하세요!')
    }
}

function deleteTodoList(e) {
    let deletedLi = document.getElementById(e.path[1].id)
    document.getElementById(`list_ul`).removeChild(deletedLi.parentNode)
}

