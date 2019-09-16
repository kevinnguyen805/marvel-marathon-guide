import React from 'react'


function Movies2(props){

     // console.log(props.movieData2)
     const movieData = props.movieData2
     const imageURL = `http://image.tmdb.org/t/p/w154/${movieData.poster_path}`


     return(
          <div className="card">
               <img className="image" src={imageURL} alt="movie poster"/>
               <h2 className="movieTitle">{movieData.title}</h2>
          </div>
     )
}
export default Movies2