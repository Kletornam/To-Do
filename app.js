const enterTodo = document.querySelector('#enterTodo');
let todoList = document.querySelector('#todoList');
let itemsCard = document.querySelector('#itemsCard');
let itemsDone = document.querySelector('#itemsDone');
const themeChanger = document.querySelector('#themeChanger');
const _html = document.querySelector('html');

updateList = (e) => {
e.preventDefault();

let item = enterTodo.value;
let entry = document.createElement('li');
entry.appendChild(document.createTextNode(item));
todoList.appendChild(entry);

let numberofItems = 0;
numberofItems = numberofItems + todoList.getElementsByTagName('li').length

itemsCard.style.visibility = 'visible';
enterTodo.value='';
itemsDone.innerHTML = numberofItems;
return todoList;
}

reorderList = (e)=>{
    e.preventDefault();
    const frag = document.createDocumentFragment();
    const list = todoList
    const items = document.querySelector('li');
    const sortedList = Array.from(items).sort(function(a,b){
        const c = a.textContent,
        d= b.textContent;
        return c<d?-1:c>d?1:0;
    });
    for(let item of sortedList){
        frag.appendChild(item)
    }
    list.appendChild(frag)
}

enterTodo.addEventListener("change",updateList);

// const listItem = document.querySelector('li');

document.addEventListener('drag', function(e){
    const target = e.target.closest("#todoList");
    if (target && e.target.closest){
        console.log(target, "is being moved")
        reorderList();
    }
});

themeChanger.addEventListener('click', function(e){
    e.preventDefault();
_html.classList.toggle('dark');
} );