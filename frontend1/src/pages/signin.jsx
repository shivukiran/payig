import { useState } from "react"
import { BottomWarning } from "../components/bottomWarning"
import { Button } from "../components/button"
import { Heading } from "../components/heading"
import { InputBox } from "../components/Inputbox"
import { SubHeading } from "../components/subheading"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Signin = () => {
  const [username , setUserName] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();

    return <div className="bg-slate-500 h-screen flex justify-center">
    <div className="flex flex-col justify-center">  
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={ e =>{
            setUserName(e.target.value);
        }}placeholder="ztron@gmail.com" label={"Email"} />
        <InputBox onChange={ e=>{
            setPassword(e.target.value);
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={ async ()=>{
            //http://localhost:3000/api/v1/user/signup
             const respose = await axios.post("http://localhost:3000/api/v1/user/signin" , {
                username:username,
                password:password,
              }); 
            localStorage.setItem("token" , respose.data.token)
            navigate("/dashboard")
          } } label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}