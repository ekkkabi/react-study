import React, { useState } from "react";
import App from "../App";
import useFetch from "../hook/useFetch";
import { useParams } from "react-router";

interface MusicType {
  id: number;
  day: string;
  title: string;
  artist: string;
}

interface Lyrics {
  id: number;
  lyrics: string;
}

const Music = () => {
  const { id } = useParams<{ id: string }>();
  const info: MusicType[] = useFetch("http://localhost:3001/info");
  const lyrics: Lyrics[] = useFetch("http://localhost:3001/lyrics");

  const selectedMusic = info.find((music) => music.id.toString() === id);

  return (
    <div>
      {selectedMusic ? (
        <>
          <h1>{selectedMusic.day}</h1>
          <h2>{selectedMusic.title}</h2>
          {lyrics.map(
            (detail) =>
              detail.id == selectedMusic.id && (
                <p key={detail.id}>{detail.lyrics}</p>
              )
          )}
        </>
      ) : (
        <span> 음악을 찾을 수 없습니다...</span>
      )}
    </div>
  );
};

export default Music;
