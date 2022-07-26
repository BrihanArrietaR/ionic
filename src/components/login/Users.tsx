import { IonContent, IonButton, IonAlert } from "@ionic/react";
import { useState } from "react";
import useApi from "../UseApi";

function Users(name:string, password:string) {
    const [showAlert, setShowAlert] = useState(false);
    const {data} = useApi(`http://localhost:3001/people`)
    {data?.map((users:any) =>{
        if(data.email === name){
             if(data.password === password){
                return "Validate"
             }
        }
      })}
    return "Non Validate"
  }
  
  export default Users;