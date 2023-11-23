import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Row from "./Components/Row/Row";
import request from "./request";
import { Helmet } from "react-helmet";
import netflixLogo from "./Assets/netflix-logo.jpg";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{String.fromCharCode()}React-Netflix-Clone</title>
        <link rel="icon" type="image/jpg" href={netflixLogo} />
      </Helmet>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentary movies" fetchUrl={request.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
