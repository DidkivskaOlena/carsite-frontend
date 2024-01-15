import { useParams } from "react-router-dom";

const CarPage = () => {
    const {carId} = useParams()
    return <div>Now showing car with id - {carId}</div>
}

export default CarPage