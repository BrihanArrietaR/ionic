import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent } from '@ionic/react';

function Alert() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowAlert(true)}>Registrar</IonButton>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Se han editado los cambios correctamente"
        message="This is an alert!"
        buttons={['OK']}
      />
    </IonContent>
  );
}

export default Alert;