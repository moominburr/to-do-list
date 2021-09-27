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
  let today = `${d.getFullYear()}-${
    d.getMonth() < 11 ? "0" + (d.getMonth() + 1) : "01"
  }-${d.getDate()}`;
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

  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descrLabel);
  form.appendChild(descriptionInput);
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  form.appendChild(priorityLabel);
  form.appendChild(priorityInput);
  form.appendChild(priorityNum);
  return form;
}
