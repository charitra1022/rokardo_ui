import { useParams } from "react-router-dom";

const ArtistPage = () => {
  let params = useParams();
  // console.log(params);

  return (
    <div>
      <div>Artist: {params.mbid}</div>
    </div>
  );
};

export default ArtistPage;
