import { HomeStatic } from "./HomeStatic"
import { Products } from "./Products"
import { SingleProduct } from "./SingleProduct"


export const Home = () => {
    return (
        <div>
            <h2>Home page</h2>
            <HomeStatic />
            <Products />
            <SingleProduct />
        </div>
    )
}
