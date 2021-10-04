import "./styles/style.css";
import form from "./todoForm";
import toDo from "./todo";

const thursday = new toDo();
thursday.title = "Water plants";
thursday.descr = "Water them properly";
thursday.dueDate = "2022-01-01";
thursday.priority = 1;
thursday.notes = "Do something";
thursday.status = "Not done";

const friday = new toDo();
friday.title = 'Drink tea';
friday.descr = 'Drink tea';
friday.dueDate = '2021-06-03';
friday.priority = 10;
friday.notes = 'Yum';
friday.status = 'Not done';

const saturday = new toDo();
saturday.title = 'Make lunch';
saturday.descr = 'Make lunch';
saturday.dueDate = '2021-09-03';
saturday.priority = 8;
saturday.notes = 'Tofu probably';
saturday.status = 'Not done';

function home() {
  const container = document.createElement("div");
  container.classList.add("container");

  const toDoList = [];
  toDoList.push(thursday);
  toDoList.push(friday);
  toDoList.push(saturday);

  const toDoContainer = document.createElement("div");

  toDoList.forEach((el) => {
    const toDo = document.createElement("div");
    toDo.classList.add('to-do-individual');
    for (let prop in el) {
      let p;
      if (prop === 'title') {
        p = document.createElement("h2");
      } else {
        p = document.createElement("p");
      }

      p.innerText = el[prop];
      toDo.appendChild(p);
    }
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'check');
    checkbox.classList.add('checkbox');
    toDo.appendChild(checkbox);
    toDoContainer.appendChild(toDo);
  });

  container.appendChild(toDoContainer);
  container.appendChild(form());
  return container;
}

document.body.appendChild(home());
