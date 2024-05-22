import './i18n';
import { useTranslation} from 'react-i18next';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { SharedLayout } from "./components/SharedLayout";
import AdminPage from "./pages/Admin/AdminPage";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";



const Home = lazy(() => import("./pages/Home/Home"))
const About = lazy(() => import("./pages/About/About"))
const Services = lazy(() => import("./pages/Services/ServicePage"))
const Catalogue = lazy(()=> import("./pages/Catalog/CatalogPage"))
const CarDetails = lazy(()=> import("./pages/CarDetails/CarDetails"))
const Favorites = lazy(()=> import("./pages/Favorites/FavoritesPage"))
const FAQ = lazy(()=> import("./pages/FAQ/FAQPage"))
const Contacts = lazy(()=> import("./pages/Contacts/ContactPage"))
const LoginPage = lazy(() => import("./pages/Login/LoginPage"))
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFoundPage"))
// const SSL = lazy(() => import("./.well-known/pki-validation/07E4A60A6388BB85ED197D98FE8AA1D1.txt"))

function App() {
  const {t} = useTranslation()
  return (
        <BrowserRouter>
          <Suspense fallback={<div>{t("loading")}</div>}>
          <Routes>
            <Route path='/.well-known/pki-validation/07E4A60A6388BB85ED197D98FE8AA1D1.txt' element={"../public/.well-known/pki-validation/07E4A60A6388BB85ED197D98FE8AA1D1.txt"}/>
            <Route path="/" element={<SharedLayout/>}>
              <Route index element={<Home />}/>
              <Route path="/about" element={<About />} />
              <Route path="/catalogue" element={<Catalogue/>}/>
              <Route path="/catalogue/:carId" element={<CarDetails/>}/>
              <Route path="/services" element={<Services />} />
              <Route path="/favorites" element={<Favorites/>}/>
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/login" element={
                <RestrictedRoute redirectTo="/admin" component={<LoginPage/>}/>
              }/>
              <Route path="/admin" element={
                <PrivateRoute redirectTo="/login" component={<AdminPage/>}/>
              }/>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
          </Suspense>
        </BrowserRouter>
  )
}

export default App;
