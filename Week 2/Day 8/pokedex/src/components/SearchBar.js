import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "./SearchBar.css"

export default function SearchBar() {
    const [search, changeSearch] = useState("")
    const [data, setData] = useState([])

    function fetchData() {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1281`)
            .then(res => res.json())
            .then(
                (result) => {
                    let pokeArray = result.results.filter((x) => x.name.startsWith(search))
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
            <div className='container w-10'>
            {
                data.map((pokemon) => {
                    return <div className='text-white text-center bg-secondary rounded m-2'>{pokemon.name}</div>
                })
            }
            </div>
        </div>

    )
}
