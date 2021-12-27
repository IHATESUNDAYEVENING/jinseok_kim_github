window.onload = function () {

}

function addByEnter() {
    if (window.event.keyCode == 13) {
        addTodoList();
    }
}

function addTodoList() {
    const addValue = document.getElementById('add_input').value
    if (addValue !== '') {
        var addLi = document.createElement('li');
        addLi.innerHTML =  `<li class="todo_list_li">${addValue}<button class="delete_btn">삭제</button></li>`;   
        document.getElementById('list_ul').appendChild(addLi);

        document.getElementById('add_input').value = ''
    } else {
        alert('할일을 입력하세요!')
    }
}
