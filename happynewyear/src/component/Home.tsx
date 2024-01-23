import React from "react";
import Music from "./Music";
import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";

interface MusicType {
  id: number;
  day: string;
}

const Home = () => {
  const info: MusicType[] = useFetch("http://localhost:3001/info");
  if (info.length == 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className="list_music">
      {info.map((music) => (
        <li key={music.id}>
          <Link to={`/id/${music.id}`}>{music.day}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
