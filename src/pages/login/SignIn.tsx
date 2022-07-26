import { IonButton, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonRoute, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { personOutline, personAdd } from "ionicons/icons";
import { useState } from "react";
import { Route } from "react-router";
import LoginValidate from "../../components/login/LoginValidate";
import useApi from "../../components/UseApi";

const SigIn: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSignin = () =>{
        try {
          LoginValidate(email,password)
        } catch (err) {
          console.log(err);
          }
      }
    return (
        <div>
            <IonHeader collapse="fade" translucent={true}>
                <IonToolbar>
                     <IonTitle size="large">Iniciar Sesion</IonTitle>
                </IonToolbar>
            </IonHeader>
            <form onSubmit={handleSignin}>
                <IonItem>
                    <IonLabel position="floating">Correo Electronico</IonLabel>
                    <IonInput type="text" value={email}
                     onIonChange={(e)=>setEmail(e.detail.value!)}> </IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Contraseña</IonLabel>
                    <IonInput type="password" value={password}
                     onIonChange={(e)=>setPassword(e.detail.value!)}> </IonInput>
                </IonItem>
                <IonButton expand="block" href='/menu'>Iniciar Sesion</IonButton>
            </form>
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton  href='/Register'>
                    <IonIcon icon={personAdd} />
                </IonFabButton>
            </IonFab>
        </div>
        
    );
  };

  export default SigIn;