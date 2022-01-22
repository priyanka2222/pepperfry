import { HomeStatic } from "./HomeStatic"

import { Products } from "./Products"
import { SingleProduct } from "./SingleProduct"
import { CartFooter } from "./CartFooter"
import { CartHeader } from "./CartHeader"
import { Checkout } from "./Checkout"
import { Header } from "./Header"
import {Footer} from './Footer'

export const Home = () => {
    return (
        <div>
            <Header />
            <HomeStatic />
            <Products />
            <SingleProduct />
            <CartHeader />
            <Checkout />
            <CartFooter />
           
        </div>
    )
}