import { Card } from "./components/card";



function App() {

  return (
    <>
      <Card 
        nombre="Carlos" 
        profesion="Desarrollador web" 
        descripcion="Carlos es un desarrollador web"
      />
      <Card 
        nombre="María" 
        profesion="Desarrolladora full stack" 
        descripcion="María es una gran desarroladora full"
      />
      <Card 
        nombre="Pepe" 
        profesion="Barista" 
        descripcion="Pepe es un gran Barista"
      />
    </>
  )
}

export default App;
