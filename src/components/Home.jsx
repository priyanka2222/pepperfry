import { HomeStatic } from "./HomeStatic"
import Login from "./Login"
import { Products } from "./Products"
import { SingleProduct } from "./SingleProduct"
import { Payment } from "./Payment"
import { Cart } from "./Cart"
import { Header } from "./Header"
import { Slideshow } from "./Slideshow"
import { Footer } from "../../myfiles/Footer"


export const Home = () => {
    return (
        <div>

            <Header />
            <HomeStatic />
            <Footer />
            {/* <h2>Home page</h2>
            <HomeStatic />
             <Products />
            <SingleProduct /> */}

            {/* <Cart />
            <Payment /> */}
        </div>
    )
}
