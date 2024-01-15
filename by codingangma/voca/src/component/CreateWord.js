import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const CreateWord = () => {
  const days = useFetch(`http://localhost:3001/days`);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:3001/words`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("단어가 추가되었습니다.😊");
          navigate(`/day/${dayRef.current.value}`);
          setIsLoading(false);
        }
      });
    }
  };
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
  return (
    <form>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>한글</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button onClick={onSubmit} style={{ opacity: isLoading ? 0.3 : 1.0 }}>
        {isLoading ? "Saving..." : "저장"}
      </button>
    </form>
  );
};

export default CreateWord;
