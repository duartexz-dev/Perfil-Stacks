import Header from "./components/Header";
import Card from "./components/CardPerfil";
import CardProjects from "./components/Cardprojetos";
import Career from "./components/historyCard";

function App() {
  return (
    <>
      <Header />
      <img
        className="d-flex justify-content-center align-items-center"
        src="https://avatars.githubusercontent.com/u/233804103?s=400&u=2b21a10555abcca91b0b05ffa0bacc66192d6349&v=4"
        alt="Foto-de-perfil"
        width="200px"
        height="200px"
      />
      <Card />
      <CardProjects />
      <Career />
    </>
  );
}

export default App;
