import style from "./App.module.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Services } from "./components/Services/Services";
import { CardItem } from "./components/CarCatalogue/CardItem";
import { Favorites } from "./components/Favorites/Favorites";
import { Faq } from "./components/FAQ/Faq";
import { ContactUs } from "./components/ContactUs/ContactUs";
import {Header} from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <div>
       <Header/>
        <hr color="grey" />
        <div>
          <Routes>
            <Route index path="/" element={<HomePage />}></Route>
            <Route path="/aboutUs" element={<AboutUs />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/carCatalogue" element={<CardItem />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/contactUs" element={<ContactUs />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
