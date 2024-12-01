import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import axios from "axios";

const app = express();
const port = 3000;

const API_URL = "https://taylor-swift-api.sarbo.workers.dev";


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/getAlbums", async (req, res) => {
    const getAlbums = API_URL + "/albums";
    try {
        const albums = await axios.get(getAlbums);
        const albumsArray = albums.data;
        res.render("index.ejs", {
            albums: albumsArray
        });
    } catch (error) {
        console.error(error.message);
    }
})

app.post("/albumInfo", async (req, res) => {
    const chosenAlbum = req.body.choice;
    const getAlbums = API_URL + "/albums";
    try {
        const albums = await axios.get(getAlbums);
        let songs = await axios.get(getAlbums);
        switch (chosenAlbum) {
            case "debut":
                songs = await axios.get(getAlbums + "/2");
                res.render("index.ejs", {
                    albumInfo: albums.data[1],
                    songs: songs.data
                })
                break;
            case "1989":
                songs = await axios.get(getAlbums + "/1");
                res.render("index.ejs", {
                    albumInfo: albums.data[0],
                    songs: songs.data
                });
            break;
            case "fearless":
                songs = await axios.get(getAlbums + "/3");
                res.render("index.ejs", {
                    albumInfo: albums.data[2],
                    songs: songs.data
                });
            break;
            case "speak now":
                songs = await axios.get(getAlbums + "/4");
                res.render("index.ejs", {
                    albumInfo: albums.data[3],
                    songs: songs.data
                });
            break;
            case "red":
                songs = await axios.get(getAlbums + "/5");
                res.render("index.ejs", {
                    albumInfo: albums.data[4],
                    songs: songs.data
                });
            break;
            case "reputation":
                songs = await axios.get(getAlbums + "/6");
                res.render("index.ejs", {
                    albumInfo: albums.data[5],
                    songs: songs.data
                });
            break;
            case "lover":
                songs = await axios.get(getAlbums + "/7");
                res.render("index.ejs", {
                    albumInfo: albums.data[6],
                    songs: songs.data
                });
            break;
            case "folklore":
                songs = await axios.get(getAlbums + "/8");
                res.render("index.ejs", {
                    albumInfo: albums.data[7],
                    songs: songs.data
                });
            break;
            case "evermore":
                songs = await axios.get(getAlbums + "/9");
                res.render("index.ejs", {
                    albumInfo: albums.data[8],
                    songs: songs.data
                });
            break;
            case "midnights":
                songs = await axios.get(getAlbums + "/10");
                res.render("index.ejs", {
                    albumInfo: albums.data[9],
                    songs: songs.data
                });
            break;
            case "ttpd":
                songs = await axios.get(getAlbums + "/11");
                res.render("index.ejs", {
                    albumInfo: albums.data[10],
                    songs: songs.data
                });
            break;
            default:
                break;
        }
    } catch(error) {
        console.error(error.message);
    }
})

app.listen(port, () => {
    console.log(`Server now running on port ${port}`);
})