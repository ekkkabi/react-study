import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // 첫 번째 인자 : 콜백함수 , 두 번쨰 인자 : 종속성 배열
  useEffect(
    () => {
      // 기능 구성 요소 안에서 일어나기 원하는 코드
      fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
        response.json().then((users) => setMonsters(users))
      );
    },
    [
      // 배열 내부 값이 변할 때 = 콜백 함수 실행할 때
      // 빈 배열일 경우 -> 처음 실행시에만 마운트
    ]
  );

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilterMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="search-box"
        type="search"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
