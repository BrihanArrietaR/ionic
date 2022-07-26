import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import LoginValidate from "../../components/login/LoginValidate";
import UseApi from "../../components/UseApi";
const Register: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [role, setRole] = useState(3)
    const {post} = UseApi(`http://localhost:3001/people`);
    const handleRegister = () =>{
      try {
        post({name:name,address:address,email:email,role:role,password:password})
      } catch (err) {
        console.log(err);
        }
    }
    return (
        <div>
        <IonHeader translucent>
        <IonToolbar>
        <IonTitle size="large">Registrarse</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/Signin"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
            <form onSubmit={handleRegister}>
                <IonItem >
                    <IonLabel position="floating">Correo Electronico</IonLabel>
                    <IonInput type="text" value={email}
                     onIonChange={(e)=>setEmail(e.detail.value!)}> </IonInput>
                </IonItem>
                <IonItem >
                    <IonLabel position="floating">Nombre completo</IonLabel>
                    <IonInput type="text" value={name}
                     onIonChange={(e)=>setName(e.detail.value!)}> </IonInput>
                </IonItem>
                <IonItem >
                    <IonLabel position="floating">Direccion completa</IonLabel>
                    <IonInput type="text" value={address}
                     onIonChange={(e)=>setAddress(e.detail.value!)}> </IonInput>
                </IonItem>
                <IonItem >
                    <IonLabel position="floating">Contraseña</IonLabel>
                    <IonInput type="password" value={password}
                     onIonChange={(e)=>setPassword(e.detail.value!)}> </IonInput>

                </IonItem>
                <IonButton expand="block" type="submit">Registrarse</IonButton>
            </form>
            
        </div>
      
    );
  };

export default Register;