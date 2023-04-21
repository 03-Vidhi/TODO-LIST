
const handleClick=()=>{
    const todoContainer=document.querySelector('.todo_container');

    // take input
    const input=document.getElementById('input').value;
    document.getElementById('input').value=''



    const toDoitem = document.createElement('div');
    toDoitem.setAttribute('class', 'todo_item');
    
    const h3 = document.createElement('h3');
    h3.innerText = input;
    toDoitem.appendChild(h3);
    
    const btns = document.createElement('div');
    btns.setAttribute('class','btns');
    
    const updateBtn=document.createElement('button');
    updateBtn.setAttribute('class','btn');
    updateBtn.setAttribute('onclick',"handleUpdate(this)");
    updateBtn.innerText='Update';
    
    
    const deleteBtn=document.createElement('button');
    deleteBtn.setAttribute('class','btn');
    deleteBtn.setAttribute('onclick',"handleDelete(this)");
    deleteBtn.innerText='Delete';
    
    btns.appendChild(updateBtn);
    btns.appendChild(deleteBtn);
    
    toDoitem.appendChild(btns);
    todoContainer.appendChild(toDoitem);
    
} 

const handleDelete = (e) => {
    const todoItem=e.parentNode.parentNode;
    const todoContainer=todoItem.parentNode;
    todoContainer.removeChild(todoItem);
    console.log(todoContainer);
}
const handleUpdate=(e)=>{
    if(e.innerText=='SAVE'){
        e.innerText='UPDATE';
        const parent=e.parentNode.parentNode;
        const input=e.parentNode.previousSibling;
        const inputValue=input.value;
        const heading =document.createElement('h3');
        heading.innerText=inputValue;
        parent.replaceChild(heading,input);
        console.log(input);

    }
    else{
        e.innerText='SAVE';
        const parent=e.parentNode.parentNode;
        const heading=e.parentNode.previousSibling;
        const inputValue=e.parentNode.previousSibling.innerText;
        const input=document.createElement('input');
        input.style.outline = 'none';
        input.style.background = 'Transparent';
        input.style.border = 'none';
        input.style.color = 'white';
        input.style.fontFamily =  'Gloock';
        input.style.fontWeight = '500';
        input.style.fontSize = '1.4rem';
        input.style.letterSpacing = '0.2rem';
        input.setAttribute('class','input');
        input.value=inputValue;
        parent.replaceChild(input,heading);

    }
    // console.log(e);
}













