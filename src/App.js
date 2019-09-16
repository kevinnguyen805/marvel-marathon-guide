import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Movies1 from './Components/Movies1'
import Movies2 from './Components/Movies2'
import Movies3 from './Components/Movies3'



function App() {

  const [showText, setShowText] = useState(false)


  const [movie1, setMovie1] = useState([])
  useEffect( () => {
    axios.get('https://api.themoviedb.org/4/list/121401?page=1&api_key=18385a099203e46145c0e8f9e2b51c80')
    .then(response => {
      // console.log(response.data.results)
      const movieData1 = response.data.results
      setMovie1(movieData1)
    })
  },[])



  const [movie2, setMovie2] = useState([])
  useEffect( () => {
    axios.get('https://api.themoviedb.org/4/list/121401?page=2&api_key=18385a099203e46145c0e8f9e2b51c80')
    .then(response => {
      // console.log(response.data.results)
      const movieData2 = response.data.results
      setMovie2(movieData2)
    })
  },[])

 
  const movie3 = [...movie1, ...movie2]
  movie3.sort((a,b) => {
    return (new Date(a.release_date).getTime() - new Date(b.release_date).getTime())
  })
 
 

  return (
    <div className="App">
      <img className="logo" src="http://i.imgur.com/zVKjblJ.png"/>
      <img src="https://fontmeme.com/permalink/190916/3874304977e18f87504167f497e5af1a.png"/>
      <br />
      <button onClick = {() => { setShowText(!showText)}}> 
        {showText ? <> Sort by Release Date </> : <> Sort by MCU Timeline </>}
      
      </button>
      {showText && 
        <div className="Container"> 
          <h3></h3>
          <div className="movieContainer">
            { movie1.map(item => { return <Movies1 movieData1={item} key={item.id} /> })}
            { movie2.map(item => { return <Movies2 movieData2={item} key={item.id} /> })} 
          </div>
        </div>}

      {!showText && 
        <div className="Container">
          <div className="movieContainer">
            {
              movie3.map(item => {
                return <Movies3 movieData3={item} key={item.id} />
              })
            }
          </div>
        </div>
      }
      <div className="footer">
        <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-blue-61ce76f69ce1e4f68a6031d975df16cc184d5f04fa7f9f58ae6412646f2481c1.svg" alt="TDMB logo" />
      </div>
      <div className="contact">
        <p>Contact Me</p>
        <a href="https://github.com/kevinnguyen805">GitHub</a>
        <a href="https://www.linkedin.com/in/kevinnguyen805/">LinkedIn</a>
        <p>Email: NguyenKevin225@gmail.com</p>
      </div>
    </div>
  );
}

export default App;
