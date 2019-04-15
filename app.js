function onReady() {
    const toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');

 function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
    title: newToDoText.value,
    complete: false
  });

   newToDoText.value = '';

   renderTheUI();
  }

  addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
 });

  function renderTheUI() {
     const toDoList = document.getElementById('toDoList');
     toDoList.textContent = '';

     toDos.forEach(function(toDo) {
       const newLi = document.createElement('li');
       const checkbox = document.createElement('input');
       checkbox.type = "checkbox";

        newLi.textContent = toDo.title;
        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
    });

  }
  renderTheUI();
}

window.onload = function() {
  onReady();
};

// Below is the app.js from checkpoint 05 - create delete button for to-do app
// function onReady() {
//  const addToDoForm = document.getElementById('addToDoForm');
//    const newToDoText = document.getElementById('newToDoText');
//    const toDoList = document.getElementById('toDoList');
//
//    addToDoForm.addEventListener('submit', (event) => {
//    event.preventDefault();
//
//        // get the text to the to-do list
//        let title = newToDoText.value;
//
//        // create a new li
//        let newLi = document.createElement('li');
//
//      // create a new input
//        let checkbox =          document.createElement('input');
//
//       // create delete button
//    let deleteButton = document.createElement('button');
//
//        // set the input's type to checkbox
//        checkbox.type = "checkbox";
//
//      // set text display of delete button
//    deleteButton.textContent = "Done";
//
//        // set the to-do title
//        newLi.textContent = title;
//
//        // attach the checkbox to the li
//        newLi.appendChild(checkbox);
//
//        // attach the li to the ul
//       toDoList.appendChild(newLi);
//
//         // attach the delete button to the li
//    newLi.appendChild(deleteButton);
//
//        //empty the input
//        newToDoText.value = '';
//
//      //event listener for the delete button
//    deleteButton.addEventListener('click', function () {
//      toDoList.removeChild(newLi);
//
//    });
//  });
//}

//window.onload = function() {
//  onReady();
//};
