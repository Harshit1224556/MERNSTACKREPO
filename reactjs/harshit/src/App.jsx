
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Search  from './components/searchbar';
import Card from './components/card';
import './App.css'



function App() {
 return (
  <>
   <Header />
   <Search />
   <div className="cards-container">

   <Card />
   <Card />
   <Card />
   <Card />
   

   </div>

   </>
 )
}



export default App
