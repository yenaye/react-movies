import { useEffect, useState } from "react"
import { initFlowbite } from "flowbite"
import MovieHeader from "./components/MovieHeader"
import MovieList from "./components/MovieList"
import MovieFooter from "./components/MovieFooter"

function App() {
  // States With Hook
  const [title, setTitle] = useState('React 영화목록 앱')
  const [copyright, setCopyright] = useState('© 2024 React Movies Application. All Rights Reserved.')
  const [movies, setMovies] = useState([])

  // 영화 리스트 API
  // Set API Option
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer {Authorization Key}'
    }
  }
  // Get API Data
  const fetchData = (type, val) => {
    const url = type=='menu'
              ? 'https://api.themoviedb.org/3/movie/' + val + '?language=ko-KR&page=1&region=kr'
              : 'https://api.themoviedb.org/3/search/movie?query=' + val + '&include_adult=false&language=ko&page=1&region=kr'
    
    fetch(url, options)
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    initFlowbite() // Flowbite Plugin
    fetchData('menu', 'now_playing') // Get API Data
  }, [])

  return (
    <>
      <MovieHeader title={title} fetchData={fetchData}/>
      <MovieList movies={movies}/>
      <MovieFooter copyright={copyright}/>
    </>
  )
}

export default App
