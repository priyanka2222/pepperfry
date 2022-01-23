import {useEffect, useState} from 'react';
import { apiurl } from '../utils/request';
import '../styles/Signup.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {setUser} from "../Redux/User/action"
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export const Signup = ({setPage}) => {
    const {user} = useSelector((state)=>({
            user : state.userState.data
        }
    ))
    const navigate = useNavigate()
    const handleOpen = () => {
        setPage()
    };
 
    const dispatch = useDispatch()
    const [text, setText] = useState()
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setText({...text, [name]:value})
    }
   async function handleSubmit(e){
        e.preventDefault()
        await apiurl.post('/user/signup',{
            name : text.name,
            email : text.email,
            password : text.password
        })
        .then(res=>{
           dispatch(setUser(res))
          
        })
        .catch(err=>{
            console.log(err)
        })
    }
    // if(user){
    //     return <div>
    //         <Header />
    //         <h2>Account created successfully....</h2>
    //         <Footer />
    //     </div>
    // }


    return (
        <div>
            <Header />
            <div className='loginMain' >
                <div id="loginPoster">
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec_13012022.jpg" alt="login-ad" />
                </div>
                <div className='form'>
                {/* <button id="cancel">x</button> */}

                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} type="text" name="name" placeholder='Name' />
                        <input onChange={handleChange} type="email" name="email" placeholder='Email ID' />
                        <input onChange={handleChange} type="text" name="password" placeholder='Password' />
                        <Link to="/login">
                        <input style={{background : "#e75a16", color:"white", border : "none", padding:"10px"}} type="submit" value="Register" /></Link>
                    </form>

                    <p>By registering you agree to our Terms & Conditions</p>

                    <div id="signupTxt">

                       <Link to="/login"> <button style={{border: "1px solid gray", padding:"5px 70px"}} id="loginBtn">Existing User? Log In</button> </Link>
                        <span>
                            <p>OR Continue with</p>
                            <img src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" alt="fb" />
                            <img src="https://ii1.pepperfry.com/images/social_login_google_2x.png" alt="google" />
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}


