import "./styles/style.css";

const createToDo = ({
  title = "To Do",
  description = "What we need to do...",
  dueDate = "01/01/2022",
  priority = 1,
  notes = "Extra info...",
  status = "incomplete",
} = {}) => ({
  title,
  description,
  dueDate,
  priority,
  notes,
  status,
});

const thursday = createToDo({
  title: "Laundry",
  decription: "Do laundry",
  dueDate: "03/01/2022",
  priority: 2,
  notes: "No more clothes",
  status: "incomplete",
});

function home() {
  const container = document.createElement("div");
  container.classList.add("container");
  
  const form = document.createElement("div");
  
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
  
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descrLabel);
  form.appendChild(descriptionInput);
  container.appendChild(form);
  return container;
}

document.body.appendChild(home());
