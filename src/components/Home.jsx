
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
            {/* <Payment /> */}
            <Header />
          
            <HomeStatic />
            <Footer />
  
        </div>
    )
}

