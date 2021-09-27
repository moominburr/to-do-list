import "./styles/style.css";
import form from './todoForm';

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
  
  
  
  
  container.appendChild(form());
  return container;
}

document.body.appendChild(home());
