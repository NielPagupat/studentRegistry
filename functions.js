let arr = []

const reload = () => {
    const td = (data) => {
        let tableData = document.createElement('td');
        tableData.innerHTML = data;
        return tableData;
    }
    const th = (data) =>{
        let tableHeader = document.createElement('th');
        tableHeader.innerHTML = data;
        return tableHeader;
    }
    const row = (type, id, name, age) => {
        let tableRow = document.createElement('tr')
        if (type == 'td') {
            tableRow.appendChild(td(id));
            tableRow.appendChild(td(name));
            tableRow.appendChild(td(age));
            return tableRow;
        } else {
            tableRow.appendChild(th(id));
            tableRow.appendChild(th(name));
            tableRow.appendChild(th(age));
            return tableRow;
        }
        
    }

    let table = document.querySelector('#mainTable')
    table.innerHTML = ''
    table.appendChild(row('th', 'ID', 'Name', 'Age'))
    for (let index = 0; index < arr.length; index++) {
        table.appendChild(row('td', arr[index].ID, arr[index].name, arr[index].age));
    }
}

const clearTextFields = () => {
    for (let index = 0; index < document.querySelectorAll('input').length; index++) {
        document.querySelectorAll('input')[index].value = '';
    }
}

const add = () => {
    arr.push({ID: document.querySelector('#ID').value,
              name: document.querySelector('#name').value,
              age: document.querySelector('#age').value, })
    clearTextFields()
    reload()
}
const rem = () => {
    let id = document.querySelector('#ID').value
    if (arr.find(item => item.ID == id)) {
        let index = arr.findIndex(item => item.ID == id);
        arr.splice(index, 1);
        document.querySelector('#savebtn').style.display = 'none'
        document.querySelector('#editbtn').style.display = 'block'
        clearTextFields();
        reload();
    } else {
        alert('data does not exist!');
    }
}
const edit = () => {
    let id = document.querySelector('#ID').value
    if (arr.find(item => item.ID == id)) {
        let data = arr.find(item => item.ID == id);
        document.querySelector('#ID').value = data.ID;
        document.querySelector('#name').value = data.name;
        document.querySelector('#age').value = data.age;
        document.querySelector('#editbtn').style.display = 'none'
        document.querySelector('#savebtn').style.display = 'block'
    } else {
        alert('data does not exist!');
    }
    
}

const save = () =>{
    let id = document.querySelector('#ID').value
    let data = arr.find(item => item.ID == id);
    data.name = document.querySelector('#name').value;
    data.age = document.querySelector('#age').value;
    clearTextFields();
    reload();
    document.querySelector('#savebtn').style.display = 'none'
    document.querySelector('#editbtn').style.display = 'block'
}