    import React, { useState } from 'react'
    

    import "./Login.css"
import { useNavigate } from 'react-router-dom'

    const Login = () => {
        const [data,setData] = useState({
            name:"",
            password:""
        })
        const navigate =  useNavigate();
        const handleChange = (event) => {
            const { name, value } = event.target;
            setData((prev) => ({
              ...prev,
              [name]: value
            }));
          };
        const handleLogin = ()=>{
            if(data.name=="lingesh"&&data.password=="dharshini@0416"){
                console.log("entered")
                navigate("/Form")
                

            }
        }

        console.log(data)
    return (
        <div>
            <div>
            <input type = "text" name="name"value = {data.name} placeholder="பெயர்" onChange={handleChange} className='box'/>

            </div>
        
        <div>
        <input type = "text" name="password" value={data.password} placeholder='கடவுச்சொல்' onChange={handleChange} className='box'/>
        </div>
        <button type = "submit" className='button' onClick={handleLogin}>login</button>
        </div>
    )
    }

    export default Login
