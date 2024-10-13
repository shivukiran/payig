import { useState } from "react"
import { BottomWarning } from "../components/bottomWarning"
import { Button } from "../components/button"
import { Heading } from "../components/heading"
import { InputBox } from "../components/Inputbox"
import { SubHeading } from "../components/subheading"
import axios from "axios";
import { useNavigate } from "react-router-dom"


export const Signup=()=>{

    //initialize with the empty name change wheneever the use inputs changes
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [username , setUserName] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
    return <div className=" rounded-lg bg-slate-500 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={ e =>{
            setFirstName(e.target.value);
        }}placeholder="John" label={"First Name"} />
        <InputBox onChange={ e =>{
            setLastName(e.target.value);
        }}placeholder="Doe" label={"Last Name"} />
        <InputBox onChange={ e =>{
            setUserName(e.target.value);
        }}placeholder="ztron@gmail.com" label={"Email"} />
        <InputBox onChange={ e=>{
            setPassword(e.target.value);
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={ async ()=>{
            try{
            //http://localhost:3000/api/v1/user/signup
             const respose = await axios.post("http://localhost:3000/api/v1/user/signup" , {
                username:username,
                password:password,
                firstName:firstName,
                lastName:lastName
              }); 
            
            localStorage.setItem("token" , respose.data.token)
            alert(`Account has been created for ${username}.. \n Go To SIGNIN Page `)
            }
            catch(error)
            {
              if( error.response.status === 411)
              {
                alert("UserName Already Taken . Please!  Try Choosing Other UserName !!! ")
              }else{
                alert("An error occured.. TRY AGAIN !! ")
              }
            }
          } } label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}