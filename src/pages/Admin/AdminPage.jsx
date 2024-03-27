import { CarForm } from "../../components/CarForm/CarForm";
import CarCatalogue from "../Catalog/CatalogPage";

const AdminPage = () => {
    return (
        <>
            <h2>Admin Page</h2>
            <CarForm/>
            <CarCatalogue/>
        </>
    )
}

export default AdminPage;