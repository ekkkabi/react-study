/** React ch04 : Component */
function Header() {
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>
}

function Nav() {
  return <nav>
    <ol>
      <li><a href='/read/1'>HTML</a></li>
      <li><a href='/read/2'>CSS</a></li>
      <li><a href='/read/3'>JavaScript</a></li>
    </ol>
  </nav>
}

function Article() {
  return <article>
    <h2>Welcom</h2>
    Hello, WEB
  </article>
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>

    </div>
  );
}

export default App;
