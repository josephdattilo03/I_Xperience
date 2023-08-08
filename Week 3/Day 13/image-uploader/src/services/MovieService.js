import {collection, query, getDocs, addDoc, doc, deleteDoc} from 'firebase/firestore'
import {db} from '../firebase/firebase'
import { Movie } from '../models/Movie'

class MovieService {
    constructor() {
        this.collection = 'movies'
    }

    async createMove(movie) {
        const collectionRef = collection(db, this.collection)
        const docRef = await addDoc(collectionRef, movie.toJson())
        movie.id = docRef.id
        return movie
    }

    async fetchMovies() {
        const collectionRef = collection(db,this.collection)
        const querySnapshot = await getDocs(query(collectionRef))
        const movies = []
        querySnapshot.forEach((doc) => {
            movies.push(Movie.fromFirebase(doc))
        })
        return movies

    }

    async deleteMovie(movieId) {
        const docRef = doc(db, this.collection, movieId)
        await deleteDoc(docRef)

    }
}

const service = new MovieService()
export default service