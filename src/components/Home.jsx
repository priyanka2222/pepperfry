import { HomeStatic } from "./HomeStatic"
import Login from "./Login"
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

