import { Container } from "react-bootstrap";
import SongAdapter from "./SongAdapter";

function SongList(){

    // Dummy json data
    var jsonData = [
        {
            "name": "Shape of You",
            "artist": "Ed Sheeran",
            "listeners": "726048",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xPyQYqGkRNnLbjEdLCq9S4FK86mdUg6lIg&usqp=CAU",
            "url": "https://www.youtube.com/watch?v=JGwWNGJdvx8"
        },
        {
            "name": "Shape of You - Acoustic",
            "artist": "Ed Sheeran",
            "listeners": "64546",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nrICh8ydBicN9izN1sceHKJqc2motnaimA&usqp=CAU",
            "url": "https://www.youtube.com/watch?v=OXrA-66bdiY"
        },
        {
            "name": "Shape of you",
            "artist": "Fame On Fire",
            "listeners": "20935",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHP1RYj80YfVu2vg_QRD7SH-DvaV74pClyWw&usqp=CAU",
            "url": "https://www.youtube.com/watch?v=T6zAyhFWI4Q"
        },
        {
            "name": "Shape of You - Stormzy Remix",
            "artist": "Ed Sheeran",
            "listeners": "30852",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nrICh8ydBicN9izN1sceHKJqc2motnaimA&usqp=CAU",
            "url": "https://www.youtube.com/watch?v=j8BJOG4foCM"
        },
        {
            "name": "Shape of You - Rock",
            "artist": "Our Last Night",
            "listeners": "17694",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3S79WJFT10DbQ-mYZZAmzRcsLZffoZXeEw1_SdEYoxBL8r3NI&usqp=CAU",
            "url": "https://www.youtube.com/watch?v=wSK6np9KqzI"
        },
        {
            "name": "Shape of You (Major Lazer Remix) [feat. Nyla & Kranium]",
            "artist": "Ed Sheeran",
            "listeners": "23015",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3MhOJQE9RTsbz3ax9WijlN3xgWfdVzVhLA&usqp=CAU",
            "url": "https://www.youtube.com/watch?v=rNeDSn1Octc"
        },
        {
            "name": "Shape of You - Galantis Remix",
            "artist": "Ed Sheeran",
            "listeners": "20405",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhElXUNskHhI2STADcnXMROuNE86vY5Gp76g&usqp=CAU",
            "url": "https://www.youtube.com/watch?v=uo8Dai-nj3I"
        },
        {
            "name": "Shape Of You",
            "artist": "eat your heart out",
            "listeners": "11161",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJ_N3Bq1gjv6VaKkkg_b6LvE0l7OdsEyWuxeu60Id8aMw-Opy&usqp=CAU",
            "url": "https://www.youtube.com/watch?v=2mqyJPFDTWk"
        },
        {
            "name": "Shape of You (feat. Nyla & Kranium) - Major Lazer Remix",
            "artist": "Ed Sheeran",
            "listeners": "10325",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpx91XepUV51iVSVqFg2D5VNVGJ5DwALfgPg&usqp=CAU",
            "url": "https://www.youtube.com/watch?v=rNeDSn1Octc"
        },
        {
            "name": "Shape of You (Latin Remix) [feat. Zion & Lennox]",
            "artist": "Ed Sheeran",
            "listeners": "17953",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5yxHnAK20qQgskWkMSJqUngYTRfZs2r757JrwXM&usqp=CAU",
            "url": "https://www.youtube.com/watch?v=qOoMPmOp310"
        }
    ]

    // Convert json to json string
    jsonData = JSON.stringify(jsonData);
    // Convert json string to JavaScript object
    var songs = JSON.parse(jsonData);

    // Render the song data using adapter
    return (
        <Container className="mt-5">
            {songs.map((song)=>(
                <SongAdapter name={song.name} artist={song.artist} listeners={song.listeners} image={song.image} url={song.url} />
            ))}
        </Container>
    );
}

export default SongList;
