import React from 'react'
import Banner from './Banner/Banner'
import TopNav from './Navbar/TopNav'
import Row from './Row';
import requests from '../Request';
const Home = () => {
  return (
    <div>
    
        {/* Navbar */}
        <TopNav />
        {/* Banner */}
        <Banner/>
        {/* List Row */}
         <Row
         title="NETFLIX ORIGINAL"
         fetchUrl = {requests.fetchNetflixOriginals}
         isLargerRow
         />
         <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
         <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
         <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
         <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
         <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
         <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
         <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default Home
