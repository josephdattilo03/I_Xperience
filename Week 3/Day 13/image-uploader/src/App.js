import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import MovieUpload from './components/MovieUpload/MovieUpload';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import FileService from './services/FileService'



function App() {
  const [err, setErr] = useState('')
  async function handleUpload(selectedFile, movieTitle) {
    if (selectedFile && movieTitle) {
      const downloadUrl = await FileService.uploadImage(selectedFile,(progress) => {
        console.log(progress)
      })
      console.log(downloadUrl)
    } else {
      setErr("Please fill in all fields.")
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieUpload handleUpload={handleUpload} />}></Route>
      </Routes>

      {err ? <div className='container mt-3 d-grid'><Button onClick={() => {setErr('')}} variant='warning'>Close</Button><Alert variant='danger'>{err}</Alert></div>: <></>}
    </BrowserRouter>
  );
}

export default App;
