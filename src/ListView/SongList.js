import React from "react";
import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import SongAdapter from "./SongAdapter";
import { useSearchParams } from "react-router-dom";

import LoaderSpinner from "./Loader";

function SongList() {
  let [songs, setSongsData] = useState([]); // state for song data
  let [isLoading, setLoading] = useState(null); // state for is data loaded
  let [error, setError] = useState(null); // state for error encountered

  // get Search params
  var [searchParams] = useSearchParams();
  const searchKey = searchParams.get("q"); // get song search query form url

  // fetch data when URL parameter changes
  useEffect(() => {
    setLoading(true); // loading started

    // Generate API URL for data fetching
    // const url = `http://127.0.0.1:8000/song/search/`
    const url = `http://127.0.0.1:8000/api/song/search/?${new URLSearchParams({
      q: searchKey,
    }).toString()}`;

    // Fetch API when URL params change
    fetch(url)
      .then((res) => res.json()) // return json from response object
      .then((json) => {
        //convert json response to javascript objects
        const data = JSON.parse(JSON.stringify(json));
        setSongsData(data); // set song data
        setLoading(false); // loading done
      })
      .catch((err) => {
        setError(err); // error encountered
        setLoading(false); // loading done
      });
  }, [searchParams]);

  // Render the song data using adapter
  return (
    <Container className="mt-5">
      {/* Show/hide loading animation */}
      {isLoading && <LoaderSpinner />}
      {/* Show data only if laoding is finished */}
      {!isLoading &&
        songs.map((song) => (
          <SongAdapter
            name={song.name}
            artist={song.artist}
            listeners={song.listeners}
            image={song.image}
            url={song.url}
          />
        ))}
    </Container>
  );
}

export default SongList;
