



class Task {
    constructor(name, description, date, priority) {
        this.name = name
        this.description = description
        this.date = date
        this.priority = priority
    }
}


const exampleTask = new Task("example", "this is an example description", "date", "priority")

let tasks = []
tasks.push(exampleTask)
tasks.push(new Task("ex2","this is ex2", "date","priority"))

class UI {
    constructor() {
        this.tableBody = document.getElementById('table')
        console.log(this.tableBody)
    }

    render() {
        for (let i = 0; i < tasks.length; i++) {
            const tr = document.createElement("tr")
            tr.setAttribute("class", "card rounded bg-gray-200 mx-9 py-3 px-9 flex justify-center mb-2 items-center text-xl")
            const p = document.createElement("p")
            p.textContent = tasks[i].name
            p.setAttribute("class", "mr-9 py-1")
            const button = document.createElement("button")
            button.setAttribute("class", "border-2 inline border-gray-500 text-white bg-red-500 px-2 py-1 rounded")
            button.textContent = "Delete"
            tr.appendChild(p)
            tr.appendChild(button)
            this.tableBody.appendChild(tr)
        }
    }
    renderNew() {
        const tr = document.createElement("tr")
            tr.setAttribute("class", "card rounded bg-gray-200 mx-9 py-3 px-9 flex justify-center mb-2 items-center text-xl")
            const p = document.createElement("p")
            p.textContent = tasks[tasks.length - 1].name
            p.setAttribute("class", "mr-9 py-1")
            const button = document.createElement("button")
            button.setAttribute("class", "border-2 inline border-gray-500 text-white bg-red-500 px-2 py-1 rounded")
            button.textContent = "Delete"
            tr.appendChild(p)
            tr.appendChild(button)
            this.tableBody.appendChild(tr)
    }
}





document.addEventListener("DOMContentLoaded", function(){
    const ui = new UI()
    ui.render()
    document.addEventListener("submit", (e) => {
        e.preventDefault()
        const form = document.forms[0]
        tasks.push(new Task(form.task.value, form.description.value, form.date.value, form.priority.value))
        ui.renderNew()
    })
})

