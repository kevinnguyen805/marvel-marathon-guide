import React from 'react'

function Movies3(props){
     // console.log(props.movieData3.release_date)
     const movieData = props.movieData3
     const imageURL = `http://image.tmdb.org/t/p/w154/${movieData.poster_path}`

     return(
          <div className="card">
               <img className="image" src={imageURL} alt="movie poster" />
               <h2 className="movieTitle">{props.movieData3.title}</h2>
          </div>
     )
}

export default Movies3