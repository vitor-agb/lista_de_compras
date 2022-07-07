// Functions Ok

function inputKeyUp(e) {
    if (e.key === 'Enter') {
        if (e.target.value !== '') {
        let list = e.target.value;
        
        document.querySelector('.listArea').innerHTML += `<div class="lists"><div class="checkBox"></div><div class="listItem">${list}</div></div>`;
        
        rodar();
        blankInput();
        document.querySelector('.listArea').style.display = 'flex';

        }
    }

}

function blankInput() {
    document.querySelector('#inputText').value = '';
}

function rodar() {
    document.querySelectorAll('.checkBox').forEach(item => {
        item.addEventListener('click', line);
    })
}


function line(e) {
    if (e.target.classList.contains('checked')) {
        e.target.classList.remove('checked');
        e.target.nextSibling.classList.remove('risk');
    } else {
        e.target.classList.add('checked');
        e.target.nextSibling.classList.add('risk');
        document.querySelector('.clear').style.display = 'flex';
    }
};

// em teste

document.querySelector('.clear span').addEventListener('click', clear);

function clear(e) {
    document.querySelectorAll('.checked').forEach(item => {
        item.remove();
    })
    document.querySelectorAll('.risk').forEach(item => {
        item.remove();
    })
    document.querySelector('.clear').style.display = 'none';

}