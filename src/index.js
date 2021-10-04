import "./styles/style.css";
import form from "./todoForm";
import setToDos from "./updateToDos";

const storage = window.localStorage;
let list = [];

function createList() {
  list = JSON.parse(storage.getItem("todos"));
  console.log(list);
  return list;
}

function home() {
  const container = document.createElement("div");
  container.classList.add("container");

  const displayToDos = (() => {
    const toDoContainer = document.createElement("div");
    const toDoList = [...JSON.parse(storage.getItem("todos"))];
    if (toDoList !== null) {
      let i = 0;
      toDoList.forEach((el) => {
        i++;
        const toDo = document.createElement("div");
        toDo.classList.add("to-do-individual");
        toDo.setAttribute('id', `${i}`);
        for (let prop in el) {
          let p;
          if (prop === "title") {
            p = document.createElement("h2");
          } else {
            p = document.createElement("p");
          }
          p.innerText = el[prop];
          toDo.appendChild(p);
        }
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "check");
        checkbox.classList.add("checkbox");
        toDo.appendChild(checkbox);
        const deleteBtn = document.createElement("div");
        deleteBtn.classList.add("delete-button");
        deleteBtn.innerText = "Delete";
        function deleteToDo(e) {
          console.log(e.target.parentNode);

        }
        deleteBtn.addEventListener("click", (e) => {
          deleteToDo(e);
        });
        toDo.appendChild(deleteBtn);
        toDoContainer.appendChild(toDo);
      });
    }
    return { toDoContainer };
  })();

  container.appendChild(displayToDos.toDoContainer);

  container.appendChild(form());
  return container;
}

document.body.appendChild(home());
