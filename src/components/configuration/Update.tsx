import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent, IonInput, IonItem, IonLabel, IonText, IonTitle } from '@ionic/react';

function Update() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <IonContent>
        <div>
            <form>
                <IonTitle>Realice los cambios:</IonTitle>
                <IonItem>
                    <IonLabel position="floating">Correo Electronico</IonLabel>
                    <IonInput type="text"> </IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Nombre completo</IonLabel>
                    <IonInput type="text"> </IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Direccion completa</IonLabel>
                    <IonInput type="text"> </IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Contraseña</IonLabel>
                    <IonInput type="password"> </IonInput>
                </IonItem>
            </form>
        </div>
      <IonButton onClick={() => setShowAlert(true)}>Registrar</IonButton>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Importante"
        message="Se han realizado los cambios de manera exitosa"
        buttons={['Aceptar']}
      />
    </IonContent>
  );
}

export default Update;