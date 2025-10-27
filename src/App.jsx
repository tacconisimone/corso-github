import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Navbar'
import Card from './components/Card'
//import Navbar from './components/Navbar'
// <Navbar></Navbar>
//nuovo branch prova commit
//nuovo branch seconda commit
function App() {
  const [count, setCount] = useState(0)
  const cities = [
    {
      id: 0,
      title: "Tokyo",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, expedita",
      imgUrl: "https://www.gotokyo.org/it/plan/tokyo-outline/images/main_pxfree.webp",
      isVisited: true,
    },
    {
      id: 1,
      title: "Roma",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, expedita",
      imgUrl: "https://www.gotokyo.org/it/plan/tokyo-outline/images/main_pxfree.webp",
      isVisited: false,
    },
    {
      id: 2,
      title: "Parigi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, expedita",
      imgUrl: "https://www.gotokyo.org/it/plan/tokyo-outline/images/main_pxfree.webp",
      isVisited: false,
    },{
      id: 3,
      title: "Monaco",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, expedita",
      imgUrl: "https://www.gotokyo.org/it/plan/tokyo-outline/images/main_pxfree.webp",
      isVisited: true,
    },
  ];



  function handleClick(){
    alert("Ciao");
  }
  function handleChange(e){
    console.log(e.target.value);
  }
  function handleSubmit(e){

    e.preventDefault();  //mi permette di non far ricaricare la pagina.
    console.log(e.target.value);
  }


  return (
    <>
      <div className='grid grid-cols-4 gap-5'>
        {/* <Card 
          isVisited={cities[0].isVisited} 
          title={cities[0].title}
          imgUrl={cities[0].imgUrl} >
          {cities[0].description}
        </Card>
        <Card 
          isVisited={cities[1].isVisited} 
          title={cities[1].title}
          imgUrl={cities[1].imgUrl} >
          {cities[1].description}
        </Card>
        <Card 
          isVisited={cities[2].isVisited} 
          title={cities[2].title}
          imgUrl={cities[2].imgUrl} >
          {cities[2].description}
        </Card>
        <Card 
          isVisited={cities[3].isVisited} 
          title={cities[3].title}
          imgUrl={cities[3].imgUrl} >
          {cities[3].description}
        </Card> */}
        {cities.map((city) => (
          <Card 
            key={city.id}
            isVisited={city.isVisited} 
            title={city.title}
            imgUrl={city.imgUrl} >
            {city.description}
        </Card>
        ))}

        {cities.filter((city) => city.isVisited).map((city) => (
            <Card 
              key={city.id}
              isVisited={city.isVisited} 
              title={city.title}
              imgUrl={city.imgUrl} >
              {city.description}
          </Card>
          ))}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>


        <button onClick={handleClick}>Alert</button>
        <input type="text" onChange={handleChange}/>

        <form onSubmit={handleSubmit}>
            <button type='submit' >Invia</button>
        </form>
      </div>
    </>
  )
}

export default App



//  formattazione automatica:                   |Maiusc + Alt + F
//  Sposta la riga verso l'alto/verso il basso: |Alt + Freccia su/Giù
//  Duplica la riga corrente:                   |Alt + Maiusc + Freccia su/Giù
//  Apri il terminale integrato:                |Ctrl + ò
//  Apri una nuova finestra del terminale:      Ctrl + Maiusc + O
//  Commenta il codice selezionato:             Ctrl + ù
//  Aggiungi una riga vuota sopra:              Ctrl + Maiusc + Invio
//  Seleziona l'intera riga:                    Ctrl + L