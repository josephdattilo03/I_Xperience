import React, { useEffect, useState } from 'react'
import "./RecipeForm.css"

export default function RecipeForm(props) {
    const [name, setName] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])
    const [editRecipe, setEditRecipe] = useState(null)

    useEffect(() => {
        if (editRecipe) {
            setName(editRecipe.name)
            setIngredients(editRecipe.ingredients)
            setInstructions(editRecipe.instructions)
        }
    }, [editRecipe])

    function cleanFormAndSubmit(e) {
        e.preventDefault()
        props.onRecipeCreate(name, ingredients, instructions)
        setName("")
        setIngredients([])
        setInstructions("")
    }

    function onAddIngredient(e) {
        e.preventDefault()
        setIngredients([...ingredients, ""])
    }

    return (
        <div className='container mt-5'>
            <h1 className='text-black'>Recipe Book</h1>
            <form className='border border-secondary rounded p-3 mb-4' onSubmit={(e) => {
                cleanFormAndSubmit(e)
            }}>
                <div className='form-group'>
                    <label>Name your recipe</label>
                    <input value={name} className='form-control' type="text" placeholder='Recipe name' onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className='form-group mt-4'>
                    {
                        ingredients.map((ingredient, index) => {
                            return <div key={index} className='form-group'>
                                <label>Ingredient {index + 1}</label>
                                <input type="text" value={ingredients[index]} className='form-control' placeholder='Ingredient' onChange={(e) => {
                                    let newArr = [...ingredients]
                                    newArr[index] = e.target.value
                                    setIngredients(newArr)
                                }}></input>
                            </div>
                        })

                    }
                </div>
                <button className="btn btn-secondary w-100 mt-4" onClick={(e) => onAddIngredient(e)}>Add Ingredients</button>
                <div className="form-group mt-4">
                    <label htmlFor="exampleFormControlTextarea1">Instructions</label>
                    <textarea value={instructions} placeholder='Instructions' className="form-control" onChange={(e) => setInstructions(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className='btn btn-primary w-100 mt-3'>Add Recipe</button>
            </form>
            <div className='container text-light'>
                {
                    props.recipes.map((rec) => {
                        return <div className='rounded bg-info p-3 mb-2'>
                            <h2 className='text-center'>{rec.name}</h2>
                            <div className='rounded border border-white p-1'>
                                <h3 className='text-center mt-4'>Ingredients</h3>
                                <ul>
                                    {rec.ingredients.map((i) => {
                                        return <li>{i}</li>
                                    })}
                                </ul>
                            </div>
                            <p className='mt-4'>{rec.instructions}</p>
                            <div>
                                <button className="btn btn-warning text-light" onClick={(e) => {
                                    e.preventDefault()
                                    setEditRecipe(rec)
                                    props.onRecipeRemove(rec.id)
                                }}>Edit</button>
                                <button className='btn btn-danger text-light ms-1' onClick={(e) => {
                                    e.preventDefault()
                                    props.onRecipeRemove(rec.id)
                                }}>Delete</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
