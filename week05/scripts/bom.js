
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector(' ');

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = '❌';

<button aria-label="Close" id="close-button">❌</button>

li.appendChild(deleteButton);
list.appendChild(li);

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    };

});

let chaptersArray = getChaptersList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList',JSON.stringify(chaptersArray));
}

function getChaptersList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}