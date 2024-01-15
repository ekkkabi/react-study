import { useParams } from "react-router-dom";
import Word from "./Word";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const Day = () => {
  //dummy.words
  const day = useParams().day;
  const words = useFetch(`http://localhost:3001/words?day=${day}`);
  // const wordList = dummy.words.filter((word) => word.day === day);
  // const [word, setWord] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWord(data);
  //     });
  // }, [data]);
  return (
    <>
      <h2> Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
