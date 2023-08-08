import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import MovieUpload from './components/MovieUpload/MovieUpload';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import FileService from './services/FileService'
import { Movie } from './models/Movie';
import MovieService from './services/MovieService'
import MovieHome from './components/MovieHome/MovieHome';



function App() {
  const [err, setErr] = useState('')
  async function handleUpload(selectedFile, movieTitle) {
    try {
      if (selectedFile && movieTitle) {
        const downloadUrl = await FileService.uploadImage(selectedFile, (progress) => {
          console.log(progress)
        })
        console.log(downloadUrl)
        const result = await MovieService.createMove(new Movie(null, movieTitle, downloadUrl))
      } else {
        setErr("Please fill in all fields.")
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieUpload handleUpload={handleUpload} />}></Route>
        <Route path='/movies' element={<MovieHome/>}></Route>
      </Routes>

      {err ? <div className='container mt-3 d-grid'><Button onClick={() => { setErr('') }} variant='warning'>Close</Button><Alert variant='danger'>{err}</Alert></div> : <></>}
    </BrowserRouter>
  );
}

export default App;
