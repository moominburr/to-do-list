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

const thursday = createToDo({title : 'Laundry', decription : 'Do laundry', dueDate : '03/01/2022', priority: 2, notes : 'No more clothes', status : 'incomplete'});

function home() {
  const element = document.createElement("div");
  element.innerHTML = "Heya";
  element.classList.add("hello");
    for (const thing in thursday) {
        const p = document.createElement('p');
        p.innerHTML = thursday[thing];
        element.appendChild(p);
    }
  return element;
}

document.body.appendChild(home());
