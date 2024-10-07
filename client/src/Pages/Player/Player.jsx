import React, { useEffect, useState } from 'react'
import './Player.css'
import arrow from '../../assets/back_arrow_icon.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
const Player = () => {

    const {id} = useParams();
    const navigate =  useNavigate();
    const [apiData,setApiData]=useState({
        name:"",
        key:"",
        published_at:"",
        type : ""
    })
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmQ0NjZlNzU2ZGZjYzA2N2Y1ZDJiYzFiMWJhMmU0ZCIsIm5iZiI6MTcyNzg1Njk4Ny43MjQyMzQsInN1YiI6IjY2ZmQwMDM0YzZmYmIyZjBjZGYyMzg0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S9BrPV5SxF_HPZXrjBFk8Y3QuyPgEuP_20Y6cAN_TmI'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results[0]))
            .catch(err => console.error(err));
    }, [])
    return (
        <div className='player'>
            <img src={arrow} onClick={()=>{navigate(-2)}}/>
            <iframe width='90%' height='90%'
                src={`https://www.youtube.com/embed/${apiData.key}`} 
                title='trailer' frameBorder='0' allowFullScreen>
            </iframe>
            <div className='player-info'>
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player