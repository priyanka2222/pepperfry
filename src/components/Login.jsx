import {useEffect, useState} from 'react';
import { apiurl } from '../utils/request';
import '../styles/Login.css';
import {setUser} from "../Redux/User/action"
import { useSelector, useDispatch } from 'react-redux';

export const Login = () => {
    const {data} = useSelector((state)=>({
        user : state.userState.data
    }))
    const dispatch = useDispatch()

    const [text, setText] = useState()
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setText({...text, [name]:value})
    }
    async function handleLogin(e){
        e.preventDefault()
        await apiurl.post('/user/login',{
            name : text.name,
            email : text.email,
            password : text.password
        })
        .then(res=>{
            console.log(res)
        dispatch(setUser(res))
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className='loginPage' >
        <div id="loginPoster">
            <p>Log in</p>
            <h2>You Will Be Able To Track Your Order, Use Wishlist & More.</h2>
        </div>
        <div className='form'>
        <button id="cancel">x</button>

            <form onSubmit={handleLogin}>
                <input onChange={handleChange} type="email" name="email" placeholder='Email ID' />
                <input onChange={handleChange} type="text" name="password" placeholder='Password' />
                <input style={{background : "#e75a16", color:"white", border : "none", padding:"10px"}} type="submit" value="Register" />
            </form>

            <div id="signupTxt">
                <button style={{border: "1px solid gray", padding:"5px 70px"}} id="loginBtn">Register</button>
                <span>
                    <p>OR Continue with</p>
                    <img src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" alt="fb" />
                    <img src="https://ii1.pepperfry.com/images/social_login_google_2x.png" alt="google" />
                </span>
            </div>
        </div>
    </div>

  )
};
