const log = (arg) => console.log(arg);

const input = document.querySelector('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');

const list = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newItem = document.createElement('li');
    newItem.innerText = input.value;
    newItem.classList.add('unchecked');

    const delBtn = document.createElement('span');
    delBtn.innerHTML = `<span>&#x274C;</span>`;
    delBtn.setAttribute('style', 'display: none');
    newItem.append(delBtn);
    ul.appendChild(newItem);
    input.value="";

    newItem.addEventListener('click', () => {
        if(newItem.classList.contains('unchecked')) {
            newItem.classList.remove('unchecked');
            newItem.classList.add('checked');
        } else {
            newItem.classList.remove('checked');
            newItem.classList.add('unchecked');
        }
        
    });

    delBtn.addEventListener('click', () => {
        ul.removeChild(newItem);
    })
});


const edit = document.querySelector('p');
edit.classList.add('unchecked');
edit.addEventListener('click', () => {
    let spans = document.getElementsByTagName('span');
    if(edit.classList.contains('unchecked')) {
        edit.classList.remove('unchecked');
        edit.classList.add('checked');
        edit.innerText = "done";
        for (let i=0; i<spans.length; i++) {
            spans[i].setAttribute('style', 'display: inline')
        }
    } else {
        edit.classList.remove('checked');
        edit.classList.add('unchecked');
        edit.innerText = "edit list";
        for (let i=0; i<spans.length; i++) {
            spans[i].setAttribute('style', 'display: none')
        }
    }  
});





