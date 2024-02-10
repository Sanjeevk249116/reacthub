import { SignUpData, logInData } from "./actionType";

const hostApi="http://localhost:8080";

export const signUpPost=(el)=>async(dispatch)=>{
   try{
     const response=await fetch(`${hostApi}/signup`,{
      method:"POST",
      headers:{
         'Content-Type':'application/json'
      },
      body:JSON.stringify(el)
     })
    dispatch({type:SignUpData,payload:response.status})
   }catch(err){
    console.log("error in signUpData")
   }
}

export const logInPost=(el)=>async(dispatch)=>{
  
   try{
     const response=await fetch(`${hostApi}/login`,{
      method:"POST",
      headers:{
         'Content-Type':'application/json'
      },
      body:JSON.stringify(el)
     })
    dispatch({type:logInData,payload:response.status})
   }catch(err){
    console.log("error in logInData")
   }
}

