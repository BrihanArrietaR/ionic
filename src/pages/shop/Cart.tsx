import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonPage, IonText, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import { build, closeCircleOutline, ellipsisHorizontal, ellipsisVertical, personCircle, search } from 'ionicons/icons';
import { useState } from 'react';

function Cart(data:any) {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton text="Regresar" defaultHref="/Menu"></IonBackButton>
          </IonButtons>
            <IonTitle>Express App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem>
            <IonText>No hay ordenes disponibles en este momento.</IonText>
          </IonItem>
        </IonContent>
      </IonPage>
  );
}

export default Cart;