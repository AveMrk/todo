let placeholder = document.querySelector('.tasks__input');
let taskslist = document.querySelector('.tasks__list');
let addButton = document.querySelector('.tasks__add');

function addTask(event){
  event.preventDefault();
  let text = placeholder.value.trim();
  if(text === ''){
    return false;
  }
  let task = document.createElement('div');
  task.innerHTML = `
      <div class="task">
        <div class="task__title">
          ${text}
        </div>
      <a href="#" class="task__remove">&times;</a>
      </div>
      `;
  taskslist.appendChild(task);
  placeholder.value = '';
  let closeButtons = Array.from(document.querySelectorAll('.task__remove'));
  closeButtons.forEach((b) => {
    b.addEventListener('click', (e) => {
    e.target.parentElement.remove();  
    });
  })
  return false;
}
addButton.addEventListener('click', addTask)

