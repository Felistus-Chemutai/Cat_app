import { useState } from 'react'
import Card from './Components/Card';
import './App.css';
import SearchBox from './Components/SearchBox';

import cat from "./assets/cat.jpg";
import cat1 from "./assets/cat1.jpg";
import cat2 from "./assets/cat2.jpg";
import cat3 from "./assets/cat3.jpg";

function App() {

  const CatInfo = [
    {
      id: "1",
      country: "Kenya",
      catImage: cat,
      description: "Beautiful Kenyan cat",
    },
    {
      id: "2",
      country: "Tanzania",
      catImage: cat1,
      description: "Beautiful Tanzanian cat",
    },
    {
      id: "3",
      country: "Uganda",
      catImage: cat2,
      description: "Beautiful Ugandan cat",
    },
    {
      id: "4",
      country: "Rwanda",
      catImage: cat3,
      description: "Beautiful Rwandan cat",
    },
  ];

  const [filteredCats, setFilteredCats] = useState(CatInfo);

  function filterCatsByCountry(country) {
    const newCats = CatInfo.filter((cat) => cat.country === country);
    setFilteredCats(newCats);
  }
  return (
    <> 
    <SearchBox onFilter={filterCatsByCountry} />
    <Card CatInfo={filteredCats}/>
    </>
  )}
      
export default App;
