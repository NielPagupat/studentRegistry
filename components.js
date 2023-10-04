//components
const input = (id) => {
    let input = document.createElement('input');
    input.setAttribute('id', id);
    input.setAttribute('class', 'flex-grow-1 m-1');
    return input;
}

const tags = (name) => {
    let tags = document.createElement('h3');
    tags.setAttribute('style', 'width:100px');
    tags.innerHTML = name;
    return tags;
}
const button = (desc, command, id, visibility) => {
    let b = document.createElement('button');
    b.setAttribute('id', id);
    b.setAttribute('style', 'display:'+visibility)
    b.setAttribute('class', 'flex-grow-1 m-1');
    b.addEventListener('click', command);
    b.innerHTML = desc;
    return b;
}


//containers
const inputBundler = (tag, input) => {
    let box = document.createElement('div');
    box.setAttribute('class', 'd-flex');
    box.appendChild(tag);
    box.appendChild(input);
    return box;
}

const buttonBox = (b1, b2, b3, b4) => {
    let box = document.createElement('div');
    box.setAttribute('class', 'd-flex');
    box.appendChild(b1);
    box.appendChild(b2);
    box.appendChild(b3);
    box.appendChild(b4);
    return box;
}

//global component declaration
let main = document.querySelector('body');
let FormBox = document.createElement('div');
let TableBox = document.createElement('div');
let mainTable = document.createElement('table');

//global component set attribute
main.setAttribute('class','d-flex align-items-center flex-column');
FormBox.setAttribute('style', 'width:50%');
FormBox.setAttribute('class', 'd-flex flex-column');
TableBox.setAttribute('style', 'width:50%');
TableBox.setAttribute('class', 'border border-primary d-flex flex-column align-items-center');
TableBox.innerHTML = 'Student Records'
mainTable.setAttribute('id', 'mainTable');
mainTable.setAttribute('class', 'table');

//component appends
FormBox.appendChild(inputBundler(tags('ID: '), input('ID')));
FormBox.appendChild(inputBundler(tags('Name: '), input('name')));
FormBox.appendChild(inputBundler(tags('Age: '), input('age')));
FormBox.appendChild(buttonBox(button('add', ()=>{add()},'addbtn','block'),
                              button('remove', ()=>{rem()},'rembtn','block'),
                              button('edit', ()=>{edit()},'editbtn','block'),
                              button('save', ()=>{save()},'savebtn','none')));
TableBox.appendChild(mainTable);

//main Append
main.appendChild(FormBox)
main.appendChild(TableBox)



