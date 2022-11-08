var selectedRow = null;
 function showPopup(message, className) {
     const div = document.createElement('div');
     div.className = `alert notification is-primary is-light-${className}`;

    div.appendChild(document.createTextNode(message));
     const container = document.querySelector(".container");
     const main = document.querySelector('.main');
     container.insertBefore(div, main);

      setTimeout(() => document.querySelector(".alert").remove(), 3000);
 }
 
  //Clear field
  function clearFields() {
    document.querySelector("#task").value = "";
    document.querySelector('#time').value = "";
  } 
  
  function openPopup() {

    popup.classList.add("open-popup");
    }
    function closePopup() {
   popup.classList.remove("open-popup");
    }
  //Add
  const taskEvent = document.querySelector('#task-form');
  
  
  taskEvent.addEventListener('submit', (e) => {
    e.preventDefault();
   
    //get from values
    const task = document.querySelector('#task').value;
    const time = document.querySelector('#time').value;
  
   
    
  
    //validate
    if (task == "" || time == "") {
        showPopup('Please fill in fields', 'notification is-warning');
      
    } else {
        if(selectedRow == null){
          
            const list = document.querySelector('#task-list');
            const row = document.createElement('tr');
  
  
  
           row.innerHTML = `
             <tr>
            <td>${task}</td>
            <td>${time}</td>
            <td><a href="#" class="button is-link edit">Edit</a></td> 
            <td><a href="#" class="button is-danger ">Delete</a></td>
            </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showPopup('Task Added Succesfully', 'notification is-primary is-light');
            
        }
        else{
        selectedRow.children[0].textContent = task;
        selectedRow.children[1].textContent = time;
        selectedRow = null;
        showPopup('Task edited Succesfully', 'notification is-primary')
       }
       clearFields();
    }
  });
  
  
 //edit
  document.querySelector('#task-list').addEventListener('click', (e) => {
    target = e.target;
  
    if (target.classList.contains('edit')) {
      selectedRow = target.parentElement.parentElement;
      document.querySelector('#task').value = selectedRow.children[0].textContent;
      document.querySelector('#time').value = selectedRow.children[1].textContent;
      showPopup('Please wait...', 'notification is-primary');
    }
  })
  
//delete
document.querySelector('#task-list').addEventListener('click', (e) =>{
     target = e.target;
    if(target.classList.contains('is-danger')){
        target.parentElement.parentElement.remove();
        showPopup("Task deleted", "notification is-warning is-light" );
    }
});