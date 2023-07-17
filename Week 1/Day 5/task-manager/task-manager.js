class Task {
    constructor(name, description, date, priority) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }

    static fromJSON(json) {
        return new Task(json.name, json.description, json.date, json.priority);
    }
}

let tasks = [];

class UI {
    constructor() {
        this.tableBody = document.getElementById("table");
        this.form = document.getElementById("form");
        this.name = document.getElementById("task-name")
        this.description = document.getElementById("task-description")
        this.date = document.getElementById("date")
        this.priority = document.getElementById("priority")
        this.tasks = []
        this.renderTable();
    }

    renderTable() {
        this.tableBody.innerHTML = "";
        for (let i = 0; i < this.tasks.length; i++) {
            const tr = this.createRow(this.tasks[i]);
            this.tableBody.appendChild(tr);
        }
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
        const button = document.createElement("button");
        button.setAttribute(
            "class",
            "border-2 inline border-gray-500 text-white bg-red-500 px-2 py-1 rounded"
        );
        button.textContent = "Delete";
        tr.appendChild(p);
        tr.appendChild(button);
        return tr;
    }
    
    getTasksLocalStorage() {
        const json = localStorage.getItem("tasks")
        if(json) {
            const arr = JSON.parse(json)
            this.task = arr.map((x) => {
                Task.fromJSON(x)
            })
        }
    }
}
