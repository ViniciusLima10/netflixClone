import React, { useEffect, useState } from 'react';

import api from './api.js'
import './App.css'


import MovieRow from './components/MovieRow/MovieRow.js'
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie'
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Loading from './components/Loading/Loading.js';


export default function App() {


  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)


  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])


  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList()
      setMovieList(list)

      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv')

      setFeaturedData(chosenInfo)
    }

    loadAll();
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => {
          return (

            <MovieRow key={key} title={item.title} items={item.items} />
          )
        })}
      </section>

        {movieList.length <= 0 && 
          <Loading />
        }
      <Footer></Footer>
    </div>
  )
}