import { IonContent, IonButton, IonAlert } from "@ionic/react";
import { useState } from "react";
import useApi from "../UseApi";
import Users from "./Users";

function LoginValidate(user:string,password:string) {
    const [showAlert, setShowAlert] = useState(false);
    if(Users(user,password) === "Validate"){
        <IonContent>
              <IonAlert
                isOpen={showAlert}
                header="Error"
                message="Bienvenido"
                buttons ={['Aceptar']}
              />
            </IonContent>
    }else{
        return (
            <IonContent>
              <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header="Error"
                message="Usuario o contraseña no valida"
                buttons={['Aceptar']}
              />
            </IonContent>
          );
    }
    
  }
  
  export default LoginValidate;