import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Figure, Container } from "react-bootstrap";

import LoaderSpinner from "./ListView/Loader";
import SongAdapter from "./ListView/SongAdapter";

const RenderData = (data) => {
  // Renders data if the data object is non-empty

  if (Object.keys(data).length === 0) return <div></div>;

  return (
    <div className="m-5">
      <div className="text-center">
        <Figure>
          <h2>{data.details.name}</h2>
          <Figure.Image
            width={200}
            height={200}
            src={data.details.image}
            roundedCircle
            className="list-thumbnail"
          />
          <Figure.Caption>
            <h5
              className="text-center"
              dangerouslySetInnerHTML={{ __html: data.details.bio }}
            ></h5>
          </Figure.Caption>
        </Figure>
      </div>

      <Container className="mt-5">
        <h2>Top Albums of {data.details.name}</h2>
        {data.top_tracks.map((track) => (
          <SongAdapter
            name={track.name}
            artist={track.artist}
            listeners={track.playcount}
            image={track.image}
            url={track.url}
          />
        ))}
      </Container>
    </div>
  );
};

const ArtistPage = () => {
  // dummy response
  // const data = {
  //   details: {
  //     name: "Taylor Swift",
  //     plays: 958852938,
  //     mbid: "20244d07-534f-4eff-b4d4-930878889970",
  //     bio: 'Taylor Alison Swift is an American singer-songwriter. Her discography spans multiple genres, and her narrative songwriting, which is often inspired by her personal life, has received widespread media coverage and critical praise.\n\nBorn in West Reading, Pennsylvania, Swift relocated to Nashville, Tennessee in 2004 to pursue a career in country music. She broke into the country music scene with her eponymous self-titled debut studio album, "Taylor Swift" in 2006, which included the singles "Teardrops on My Guitar" and "Our Song". <a href="https://www.last.fm/music/Taylor+Swift">Read more on Last.fm</a>',
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6Kr76Lr6DrZCdaTmLxlgajcrEuNY0JK8DF8OQ_gJTj1s2cmf&usqp=CAU",
  //   },
  //   top_tracks: [
  //     {
  //       name: "Love Story",
  //       artist: "Taylor Swift",
  //       playcount: 8121159,
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJUPXD8-KWILQPA8ONV8Bf_STXVUKP3ytfw&usqp=CAU",
  //     },
  //     {
  //       name: "Blank Space",
  //       artist: "Taylor Swift",
  //       playcount: 13345079,
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBt08ZOM6eGOI9u9ZKuG21loiDGrnsKjje60cJZ9DSTl0n9Ie_&usqp=CAU",
  //     },
  //     {
  //       name: "You Belong with Me",
  //       artist: "Taylor Swift",
  //       playcount: 7347819,
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl2_zJV8hjRl2GHAmVCU8D-qpfX_6EZh7Qg&usqp=CAU",
  //     },
  //     {
  //       name: "Shake It Off",
  //       artist: "Taylor Swift",
  //       playcount: 10105654,
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtfH44rGvZq06qW4QGg5KwIiQ1fHbLPXwx5JhehU&usqp=CAU",
  //     },
  //     {
  //       name: "We Are Never Ever Getting Back Together",
  //       artist: "Taylor Swift",
  //       playcount: 7820200,
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHasxQfFVQg4SRqDcpVCIVtu__9EMHN5-LnQ&usqp=CAU",
  //     },
  //   ],
  // };

  let params = useParams(); // get url parameter

  let [artistData, setArtistData] = useState({}); // state for artist data
  let [isLoading, setLoading] = useState(false); // state for is data loaded
  let [error, setError] = useState(null); // state for error encountered

  // fetch data
  useEffect(() => {
    setLoading(true); // loading started

    // API URL for data fetching artist data
    const url = `http://127.0.0.1:8000/api/artist/page/?artist_mbid=${params.mbid}`;

    // Fetch API when page is mounted
    fetch(url)
      .then((res) => res.json()) // return json from response object
      .then((json) => {
        //convert json response to javascript objects
        const data = JSON.parse(JSON.stringify(json));
        setArtistData(data); // set artist data
        setLoading(false); // loading done
        console.log(data);
      })
      .catch((err) => {
        setError(err); // error encountered
        setLoading(false); // loading done
      });
  }, []);

  return (
    <div>
      {/* Show/hide loading animation */}
      {isLoading && <LoaderSpinner />}
      {/* Show data only if laoding is finished */}
      {!isLoading && RenderData(artistData)}
    </div>
  );
};

export default ArtistPage;
