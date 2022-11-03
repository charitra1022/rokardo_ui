import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

import ArtistAdapter from "./ArtistAdapter";
import LoaderSpinner from "./Loader";

const ArtistList = () => {
  let [artists, setArtists] = useState([]); // state for artist data
  let [isLoading, setLoading] = useState(false); // state for is data loaded
  let [error, setError] = useState(null); // state for error encountered

  // fetch data when webpage is loaded
  useEffect(() => {
    setLoading(true); // loading started

    const url = "http://127.0.0.1:8000/api/artist/top/";
    // Fetch API using defined URL
    fetch(url)
      .then((res) => res.json()) // return json from response object
      .then((json) => {
        //convert json response to javascript objects
        const data = JSON.parse(JSON.stringify(json));
        setArtists(data); // set artist data
        setLoading(false); // loading done
      })
      .catch((err) => {
        setError(err); // error encountered
        console.log(err);
        setLoading(false); // loading done
      });
  }, []);

  return (
    <Container
      fluid
      style={{ padding: "100px", paddingTop: "20px", paddingBottom: "20px" }}
    >
      <h2>Artists</h2>

      {console.log(artists)}

      <Row>
        {/* Show/hide loading animation */}
        {isLoading && <LoaderSpinner />}
        {/* Show data only if laoding is finished */}
        {!isLoading &&
          artists.map((artist) => (
            <ArtistAdapter
              name={artist.name}
              mbid={artist.mbid}
              image={artist.image}
              plays={artist.plays}
              bio={artist.bio}
            />
          ))}
      </Row>
    </Container>
  );
};

export default ArtistList;
