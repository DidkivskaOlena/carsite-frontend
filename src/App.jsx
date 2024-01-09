import style from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { MainContent } from "./components/MainContent/MainContent";
import { AboutUs } from "./components/AboutUs/AboutUs";
import {Services} from './components/Services/Services'
import {CarCatalogue} from './components/CarCatalogue/CarCatalogue'
import {Favorites} from './components/Favorites/Favorites'
import {Faq} from './components/FAQ/Faq'
import {ContactUs} from './components/ContactUs/ContactUs'


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Nav />
      <div>
        <Routes>
        <Route path="/aboutUs" element={<AboutUs/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path="/carCatalogue" element={<CarCatalogue/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
        <Route path='/contactUs' element={<ContactUs/>}></Route>
        </Routes>
      </div>
      <MainContent/>
    </div>
     </BrowserRouter>
  );
}

export default App;
