export default function setToDos(newToDo){
    const storage = window.localStorage;
    let returnable;
    if(newToDo === null) returnable = false;
    else {
        let toDos = [];
        toDos = JSON.parse(storage.getItem("todos"));
        toDos.push(newToDo);
        storage.setItem('todos', JSON.stringify(toDos));
    }
    return returnable;
}