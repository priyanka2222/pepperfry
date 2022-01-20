import { HomeStatic } from "./HomeStatic"
import Login from "./Login"
import { Products } from "./Products"
import { Header } from "./Header"
import { SingleProduct } from "./SingleProduct"

import { Payment } from "./Payment"



export const Home = () => {
    return (
        <div>

            <Header />
            {/* <h2>Home page</h2>
            <HomeStatic />
             <Products />
            <SingleProduct /> */}
            <Login />
            <Payment />
        </div>
    )
}
