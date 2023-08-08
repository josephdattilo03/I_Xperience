import React, { useEffect, useState } from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import MovieService from '../../services/MovieService'
import './MovieHome.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from 'react-router-dom'


export default function MovieHome() {
    const [movies, setMovies] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchMovies()
    }, [])

    async function fetchMovies() {
        try{
            const movieList = await MovieService.fetchMovies()
            setMovies(movieList)
            console.log(movieList)
        } catch(err) {
            console.log(err)
        }
    }

    async function handleDelete(id, index) {
        try {
            await MovieService.deleteMovie(id)
            await MovieService.fetchMovies()
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <Card className='text-center container mt-5'>
            <Card.Title className='mt-2 display-1'>Movies List</Card.Title>
            <hr></hr>
            <div className='d-flex flex-wrap p-3'>
            {movies.map((movie, index) => {
                return (
                    <Card key={movie.id} className='m-1'>
                        <Image className='movieImg' src={movie.downloadURL}></Image>
                        <Card.Title>{movie.name}</Card.Title>
                        <Button variant='danger' onClick={() => handleDelete(movie.id, index)}>Delete</Button>
                    </Card>
                )
            })}
            </div>
            <Button className='mb-3' onClick={() => {navigate("/")}}>Add Movie</Button>
        </Card>
    )
}
