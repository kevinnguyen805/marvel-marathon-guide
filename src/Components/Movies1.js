import React from 'react'


function Movies1 (props){

     // console.log(props.movieData1)
     const movieData = props.movieData1
     const imageURL = `http://image.tmdb.org/t/p/w154/${movieData.poster_path}`

     return(
          <div className="card">
               <img className="image" src={imageURL} alt="movie poster"/>
               <h2 className="movieTitle"> {movieData.title} </h2>
          </div>
     )
}

export default Movies1;