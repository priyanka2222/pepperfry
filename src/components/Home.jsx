import { HomeStatic } from "./HomeStatic"
import { Products } from "./Products"
import { SingleProduct } from "./SingleProduct"
import { CartFooter } from "./CartFooter"
import { CartHeader } from "./CartHeader"
import { Checkout } from "./Checkout"

export const Home = () => {
    return (
        <div>
         <h2>Home page</h2>
            <HomeStatic />
            <Products />
            <SingleProduct />
            <CartHeader />
            <Checkout />
            <CartFooter />
           
        </div>
    )
}
