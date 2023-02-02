import './App.css';
import Container from "./Components/Container";
import About from "./Components/About";
import Skills from "./Components/Skills";
import MyWork from "./Components/MyWork";
import Contact from "./Components/Contact";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Container/>
      <About/>
      <MyWork/>
      <Card/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
