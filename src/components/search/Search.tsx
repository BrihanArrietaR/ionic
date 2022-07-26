import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent, IonInput, IonItem, IonLabel, IonSearchbar, IonText } from '@ionic/react';

function Update() {
  const [showAlert, setShowAlert] = useState(false);
  const [searchText, setSearchText] = useState("");
  return (
    <IonContent>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
    </IonContent>
    
  );
}

export default Update;