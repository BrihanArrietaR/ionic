import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import { build, closeCircleOutline, ellipsisHorizontal, ellipsisVertical, personCircle, search } from 'ionicons/icons';
import Update from '../../components/configuration/Update';
const Configuration: React.FC = () => {
    return (
   <IonPage>
    <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Regresar" defaultHref="/Menu"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <Update/>
    </IonPage> 
      
    );
};

export default Configuration;