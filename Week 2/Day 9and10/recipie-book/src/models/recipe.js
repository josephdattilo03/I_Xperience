

export default class Recipe {
    constructor(name, ingredients, instructions) {
        this.id = 0
        this.name = name
        this.ingredients = ingredients
        this.instructions = instructions
    }
    static fromJson(json) {
        return new Recipe(json.name, json.ingredients, json.instructions)
    }
}