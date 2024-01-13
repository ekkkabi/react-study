import { useState } from "react";

const Word = (props) => {
  const [word, setWord] = useState(props.word);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(props.word.isDone);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  const toggleDone = () => {
    // setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${props.word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...props.word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  const del = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${props.word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord(null);
        } else {
          console.log("삭제 실패");
        }
      });
    }
  };

  if (word === null) {
    return null;
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone}></input>
      </td>
      <td>{props.word.eng}</td>
      <td>{isShow && props.word.kor}</td>
      <td>
        <button onClick={toggleShow}>{isShow ? "숨기기" : "뜻보기"}</button>
        <button className="btn_del" onClick={del}>
          삭제
        </button>
      </td>
    </tr>
  );
};

export default Word;
