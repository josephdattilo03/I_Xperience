import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "./SearchBar.css"

export default function SearchBar() {
    const [search, changeSearch] = useState("")
    const [data, setData] = useState([])
    const [poke, setPoke] = useState([])


    function clickPoke(pokemon) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`).then(
            res => res.json()).then (
                (res) => {
                    setPoke(res)
                },
                (err) => {
                    setPoke("")
                }
            )
    }

    function fetchData() {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1281`)
            .then(res => res.json())
            .then(
                (result) => {
                    let pokeArray = result.results.filter((x) => x.name.startsWith(search)).slice(0,60)
                    console.log(pokeArray)
                    setData(pokeArray)
                },
                (error) => {
                    setData([])

                }
            )
    }

    useEffect(() => {
        fetchData()
    }, [search])


    return (
        <div className=''>
            <div className='text-center'>
                <input type='text' className='mt-5 w-50 text-center bg-secondary text-white mb-5' onChange={(e) => { changeSearch(e.target.value) }} id="searchbar" placeholder='search'></input>
            </div>
            <div className='container mx-auto bg-secondary mb-5 p-3'>
                <h2 className='text-white text-center'>{poke.name}</h2>
            </div>
            <div className='container mx-auto text-center pb-5'>
            {
                data.map((pokemon) => {
                    return <button onClick={()=>clickPoke(pokemon)} className='text-white btn btn-lg btn-outline-secondary mx-auto m-1 ms-1'>{pokemon.name}</button>
                })
            }
            </div>
        </div>

    )
}
