
import { HomeStatic } from "./HomeStatic"
import Login from "./Login"
import { Products } from "./Products"
import { SingleProduct } from "./SingleProduct"
import { Payment } from "./Payment"
import { Cart } from "./Cart"
import { Header } from "./Header"
import {Footer} from './Footer'


export const Home = () => {
    return (
        <div>

            <Header />
            <br />
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

