import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const CreatDay = () => {
  const days = useFetch(`http://localhost:3001/days`);
  const navigate = useNavigate();
  const addDay = () => {
    fetch(`http://localhost:3001/days`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("Day 가 추가되었습니다.😊");
        navigate(`/`);
      }
    });
  };
  return (
    <div>
      <h3>현재 일수 : {days.length}일 </h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
};

export default CreatDay;
