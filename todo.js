 //deleting
let list = document.querySelector('#wrapper #todo-list ul');
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
    else if(e.target.className == 'done'){
        const li = e.target.parentElement;
        let taskDone=li.querySelector('.name');
        taskDone.classList.toggle('cross-off')
    }
});
//adding

let addTask = document.forms['add-task'];
addTask.addEventListener('submit',function(e){
    e.preventDefault();
    let task = addTask.querySelector('input[type="text"]').value;
    if(task === ''){
        window.alert('enter a task')
    }
else{
        const li = document.createElement('li');
        const name = document.createElement('span');
        const delBtn = document.createElement('span');
        const done = document.createElement('span');


        // putting content into the created elements
        name.textContent = task;
        delBtn.textContent = 'delete';
        done.textContent = 'done';
        
        
        // adding the css
        name.classList.add('name');
        delBtn.classList.add('delete');
        done.classList.add('done');
        
        // appending the created elements to the main dom
        li.appendChild(name);
        li.appendChild(delBtn);
        li.appendChild(done);
        list.appendChild(li);
        
    }
});