import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"


export default function MovieUpload({handleUpload}) {
    const [selectedFile, setSelectedFile] = useState(null)
    const [movieTitle, setMovieTitle] = useState('')

    function handleFileChange(e) {
        setSelectedFile(e.target.files[0])
    }

    return (
        <div className='container mt-5'>
            <Card>
                <Card.Body>
                    <Card.Title className='display-1'>Movie Uploader</Card.Title>
                    <Card.Text>Name your movie below and upload an image to accompany it.</Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="formMovieTitle">
                            <Form.Label>Movie Title</Form.Label>
                            <Form.Control value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} type="text" placeholder="Enter a movie title" />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formMovieImage'>
                            <Form.Label>Movie Image</Form.Label>
                            <Form.Control onChange={(e) => handleFileChange(e)} type="file"></Form.Control>
                        </Form.Group>
                        <div className='d-grid gap-2'>
                            <Button onClick={() => handleUpload(selectedFile, movieTitle)}>Upload</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
