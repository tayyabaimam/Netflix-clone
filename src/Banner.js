import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";
function Banner() {
  //using movie var with usestate
  const [movie, setMovie] = useState([]);
  //setting state with useeffect
  useEffect(() => {
    //async fn for fetching data
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //setting movie with the data received
      setMovie(
        request.data.results[
          //getting a random no from 0 to length of data
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  //def a function to cut extra words out
  function truncate(string, n) {
    //if string is present, then check if tpp lengthy then use substring fn
    return string?.length > n ? string.substring(0, n - 1) + "...." : string;
  }
  return (
    <header
      className="banner"
      //static styles, passing values as objects
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div //adding a fade at the bottom with a selfclosing div tag
        className="banner--fadeBottom"
      />
    </header>
  );
}

export default Banner;
