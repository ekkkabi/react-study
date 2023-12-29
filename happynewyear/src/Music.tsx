import React from "react";
import App from "./App";

interface Song {
  id: string;
  title: string;
  artist: string;
  photo: string;
  lyrics: string;
}

interface MusicProps {
  musicLst: Song[];
}

function Music({ musicLst }: MusicProps) {
  return (
    <div>
      {musicLst.map((song) => (
        <div key={song.id}>
          <p>{song.photo}</p>
          <h2>
            {song.artist} - {song.title}
          </h2>
          <p>{song.lyrics}</p>
        </div>
      ))}
    </div>
  );
}

export default Music;
