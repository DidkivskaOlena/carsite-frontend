import { CardComponent } from "../../components/CarCatalogue/CardComp";
import { CarForm } from "../../components/CarForm/CarForm";

const AdminPage = () => {
    return (
        <>
            <h2>Admin Page</h2>
            <CarForm/>
            <CardComponent/>
        </>
    )
}

export default AdminPage;