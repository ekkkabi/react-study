import { useState } from "react";
import UserName from "./UserName";

const Hello = (props) => {
  const [name, setName] = useState("Mike");
  const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인" : "미성년자";
  function changeName() {
    const newName = name === "Mike" ? "Jane" : "Mike";
    setName(newName);
  }
  return (
    <div>
      <h1>state</h1>
      <h2>
        {name}({age}) : {msg}
      </h2>
      <UserName name={name} />
      <button
        onClick={() => {
          changeName();
          setAge(age + 1);
        }}
      >
        Change
      </button>
    </div>
  );
};

export default Hello;
