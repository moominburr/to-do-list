import toDo from "./todo";
import setToDos from "./updateToDos";
//const storage = window.localStorage;

export default function todoForm() {
  const form = document.createElement("div");
  form.classList.add("add-to-do-form");

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "title");
  titleInput.classList.add("title-input");
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.innerHTML = "Title: ";

  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("id", "descr");
  descriptionInput.classList.add("descr-input");
  const descrLabel = document.createElement("label");
  descrLabel.setAttribute("for", "descr");
  descrLabel.innerHTML = "Description: ";

  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  let d = new Date();
  let today = `${d.getFullYear()}-${d.getMonth() + 1}-${
    d.getDate() < 10 ? "0" + d.getDate() : d.getDate()
  }`;
  console.log(today);
  dateInput.setAttribute("value", today);
  dateInput.setAttribute("id", "date");
  dateInput.classList.add("date-input");
  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "date");
  dateLabel.innerHTML = "Due by: ";

  const priorityInput = document.createElement("input");
  priorityInput.setAttribute("type", "range");
  priorityInput.setAttribute("id", "priority");
  priorityInput.setAttribute("min", "0");
  priorityInput.setAttribute("max", "10");
  priorityInput.setAttribute("value", "5");
  priorityInput.classList.add("priority-input");
  const priorityNum = document.createElement("h4");
  priorityNum.setAttribute("id", "priority-num");
  priorityNum.classList.add("priority-num");
  priorityNum.innerHTML = `Priority: ${priorityInput.value}`;
  priorityInput.addEventListener("change", () => {
    priorityNum.innerHTML = `Priority: ${priorityInput.value}`;
  });
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.innerHTML = "Priority:";

  const notesInput = document.createElement("input");
  notesInput.setAttribute("type", "text");
  notesInput.classList.add("notes-input");
  notesInput.setAttribute("id", "notes");
  const notesLabel = document.createElement("label");
  notesLabel.setAttribute("for", "notes");
  notesLabel.innerText = "Notes: ";

  function submitToDo() {
    if (titleInput.value === "" || titleInput.value === null) {
      alert("Please enter a title for your To Do.");
      return;
    }
    const newToDo = new toDo();
    newToDo.title = titleInput.value;
    newToDo.descr = descriptionInput.value;
    newToDo.dueDate = `${dateInput.value ? dateInput.value : today}`;
    newToDo.priority = priorityInput.value;
    newToDo.notes = notesInput.value;
    newToDo.status = "not done";
    setToDos(newToDo);
    resetInputs();
  }

  function resetInputs() {
    titleInput.value = "";
    descriptionInput.value = "";
    dateInput.value = today;
    priorityInput.value = 5;
    notesInput.value = "";
  }

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("submit-button");
  submitBtn.innerText = "Submit To Do";
  submitBtn.addEventListener("click", submitToDo);

  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descrLabel);
  form.appendChild(descriptionInput);
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  form.appendChild(priorityLabel);
  form.appendChild(priorityInput);
  form.appendChild(priorityNum);
  form.appendChild(notesLabel);
  form.appendChild(notesInput);
  form.appendChild(submitBtn);
  return form;
}
