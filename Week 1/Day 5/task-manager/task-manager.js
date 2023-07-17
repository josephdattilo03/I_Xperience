class Task {
    constructor(name, description, date, priority, id) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.id = id;
    }

    static fromJSON(json) {
        return new Task(json.name, json.description, json.date, json.priority, json.id);
    }
}


class UI {
    constructor() {
        this.tableBody = document.getElementById("table");
        this.form = document.getElementById("form");
        this.name = document.getElementById("task-name")
        this.description = document.getElementById("task-description")
        this.date = document.getElementById("date")
        this.priority = document.getElementById("priority")
        this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
        this.tasks = []
        this.getTasksLocalStorage()
        this.renderTable();
    }

    onFormSubmit(e) {
        e.preventDefault()
        if (this.name.value === '' || this.description.value === '' || this.date.value === '' || this.priority.value === '') {
            alert("Please fill in all values")
            return
        }
        const task = new Task(this.name.value, this.description.value, this.date.value, this.priority.value, this.tasks.length)
        this.tasks.push(task)
        this.saveTasksLocalStorage()
        this.renderTable()
        this.name.value = ""
        this.description.value = ""
        this.date.value = ""
        this.priority.value = ""

    }

    renderTable() {
        this.tableBody.innerHTML = "";
        for (let i = 0; i < this.tasks.length; i++) {
            this.tasks[i].id = i
            const task = this.tasks[i]
            const tr = this.renderRow(task);
            this.tableBody.appendChild(tr);
        }
    }

    filterTasks(task) {
        this.tasks = this.tasks.filter((currTask) => {
            return task.id != currTask.id
        })
    }
    
    renderRow(task) {
        const tr = document.createElement("tr");
        tr.setAttribute(
            "class",
            "card rounded bg-gray-200 mx-9 py-3 px-9 flex justify-center mb-2 items-center text-xl"
        );
        const p = document.createElement("p");
        p.textContent = task.name;
        p.setAttribute("class", "mr-9 py-1");
        tr.appendChild(p);
        const buttons = this.createButtons(task)
        tr.appendChild(buttons[0])
        tr.appendChild(buttons[1])
        return tr;
    }

    createButtons(task) {
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute(
            "class",
            "border-2 inline border-gray-500 text-white bg-red-500 px-2 py-1 rounded"
        );
        deleteButton.textContent = "Completed";
        deleteButton.addEventListener("click", () => this.onClickDeleteButton(task))

        const editButton = document.createElement("button")
        editButton.setAttribute("class", "border-2 inline border-gray-500 text white bg-yellow-400 px-2 py-1 ml-2 rounded")
        editButton.textContent = "Edit"
        editButton.addEventListener("click", () => this.onClickEditButton(task))

        return [deleteButton,editButton]
    }


    onClickDeleteButton(task) {
        this.filterTasks(task)
        this.saveTasksLocalStorage()
        this.renderTable()
    }

    onClickEditButton(task) {
        this.filterTasks(task)
        this.name.value = task.name
        this.description.value = task.description
        this.date.value = task.date
        this.priority.value = task.priority
        this.saveTasksLocalStorage(
            this.renderTable()
        )
    }


    saveTasksLocalStorage() {
        const json = JSON.stringify(this.tasks)
        localStorage.setItem("tasks",json)
    }
    
    getTasksLocalStorage() {
        const json = localStorage.getItem("tasks")
        if(json) {
            const taskArr = JSON.parse(json)
            this.tasks = taskArr.map((task) => Task.fromJSON(task))
        }
    }
}





document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI()
})
