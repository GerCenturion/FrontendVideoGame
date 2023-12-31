import React, { useEffect, useState } from "react";
import Style from "./videogames.module.css";

import { useSelector } from "react-redux";
import Videogame from "../videogame/videogame";
import Loader from "../Loader/Loader"
import { Link } from "react-router-dom";
import axios from "axios";
import { GENRES_URL } from "../../constants";
import { useDispatch } from "react-redux";
import {
  getVideogames,
  searchVideogames,
  sortVideogames,
} from "../../actions/index";

export default function Videogames() {
  var videogames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();
  const [filteredVideogames, setFilteredVideogames] = useState([]);

  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countPages, setCountPages] = useState([]);

  const indexOfLastGame = currentPage * 15;
  const indexOfFirstGame = indexOfLastGame - 15;
  const currentGames = filteredVideogames.slice(
    indexOfFirstGame,
    indexOfLastGame
  );

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  useEffect(() => {
    setFilteredVideogames(videogames);
    let pages = [];
    for (let i = 1; i <= Math.ceil(videogames.length / 15); i++) {
      pages.push(i);
    }
    setCountPages(pages);
  }, [videogames]);

  useEffect(() => {
    getGenres();
  }, []);

  function getGenres() {
    axios.get(GENRES_URL).then((response) => {
      setGenres(response.data);
    });
  }

  function downPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function upPage() {
    if (currentPage < Math.ceil(videogames.length / 15)) {
      setCurrentPage(currentPage + 1);
    }
  }

  function orderBy(e) {
    let aux = [...filteredVideogames];

    if (e.target.value === "A-Z") {
      aux.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
      setFilteredVideogames([...aux]);
    }

    if (e.target.value === "Z-A") {
      aux.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
      setFilteredVideogames([...aux]);
    }

    if (e.target.value === "Mayor Rating") {
      aux.sort((a, b) => {
        if (a.rating < b.rating) {
          return 1;
        } else {
          return -1;
        }
      });
      setFilteredVideogames([...aux]);
    }

    if (e.target.value === "Menor Rating") {
      aux.sort((a, b) => {
        if (a.rating > b.rating) {
          return 1;
        } else {
          return -1;
        }
      });
      setFilteredVideogames([...aux]);
    }

    if (e.target.value === "Creado por mi") {
      let aux2 = aux.filter((e) => {
        return typeof e.id === "string";
      });

      setFilteredVideogames([...aux2]);
    }
  }

  return (
    <div  >
      <div className={Style.contentInput}>
        <select
          className={Style.alpha}
          onChange={(e) => orderBy(e)}
        >
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Mayor Rating">Mayor Rating-Menor Rating</option>
          <option value="Menor Rating">Menor Rating-Mayor Rating</option>
        </select>
        <select
          className={Style.genres}
          onChange={(e) => {
            setCurrentPage(1);
            return dispatch(sortVideogames(e.target.value));
          }}
        >
          <option value="All">All</option>
          <option value="Created">Created</option>
          <option value="Existing">Existing</option>
          {genres.map((e) => {
            return (
              <option value={e.name} key={e.id}>
                {e.name}
              </option>
            );
          })}
        </select>
        <div className={Style.search}>
        <input placeholder=" 🔍 Buscar..."
          className={Style.search}
          onChange={(e) => {
            setCurrentPage(1);
            return dispatch(searchVideogames(e.target.value));
          }}
        ></input>
        </div>
      </div>

      <div> {videogames < 1 && <Loader></Loader>};
        <div className={Style.contentCards}>
          {currentGames.map((videogame) => {
            return (
              <div className={Style.textContent} key={videogame.id}>
                <Link to={`/home/videogame/${videogame.id}`}>
                  <Videogame
                    name={videogame.name}
                    background_image={videogame.background_image}
                    genres={videogame.genres}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        </div>
        <div>
        {!videogames.length < 1 && (
        <div className={Style.contentPaginate}>
          <div>
            <button className={Style.paginate} onClick={downPage}>
              {"<"}
            </button>
            {countPages.map((e) => {
              return (
                <button
                  className={
                    e === currentPage ? Style.select : Style.paginate
                  }
                  key={e}
                  onClick={() => setCurrentPage(e)}
                >
                  {e}
                </button>
              );
            })}
            <button className={Style.paginate} onClick={upPage}>
              {">"}
            </button>
          </div>
        </div>)}
      </div>
    </div>
  );
}
