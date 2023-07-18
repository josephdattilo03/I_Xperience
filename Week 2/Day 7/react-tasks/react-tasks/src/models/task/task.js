export class Task {
    constructor(name, description, date, priority) {
        this.name = name
        this.description = description
        this.date = date
        this.priority = priority
        this.completed = false
        this.id = -1
    }
    static fromJSON(json) {
        const task = new Task(json.name, json.description, json.date, json.priority)
        task.completed = json.completed
        return task
    }
}