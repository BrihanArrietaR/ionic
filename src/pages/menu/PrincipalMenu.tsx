import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRouterOutlet, IonSearchbar, IonSelect, IonSelectOption, IonTabBar, IonTabButton, IonTabs, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { add, build, buildOutline, cartOutline, closeCircleOutline, ellipsisHorizontal, ellipsisVertical, exitOutline, logoFacebook, logoInstagram, logoVimeo, personAdd, personCircle, personOutline, search, share } from 'ionicons/icons';
import { useState } from 'react';
import UseApi from '../../components/UseApi';
import Cards from './Cards';

const PrincipalMenu: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const {data} = UseApi(`http://localhost:3001/dishes`);
  var order: any[] = []
  var [orderBy] = useState("");
  if (data == ""||data == null){
    return (
      <IonPage>
        <IonHeader>
        <IonToolbar>
            <IonTitle>Express App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem>
            <IonText>No hay platos disponibles en este momento.</IonText>
          </IonItem>
        </IonContent>
      </IonPage>
    );
  }else{
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Express App</IonTitle>
              <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
          </IonToolbar>
        </IonHeader> 
        <IonContent>
          <IonList>
              <IonItem> 
                <IonSelect>
                <IonSelectOption value={orderBy ="none"}>Ninguno</IonSelectOption>
                <IonSelectOption value={orderBy ="price"}>Precio</IonSelectOption>
                <IonSelectOption value={orderBy ="name"}>Nombre</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
          <Cards orderBy/>
         <IonFab vertical="bottom" horizontal="start" slot="fixed">
            <IonFabButton  href='/cart'>
              <IonIcon icon={cartOutline} />
            </IonFabButton>
          </IonFab>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            
            <IonFabButton size="small">
              <IonIcon icon={add} />
            </IonFabButton>
            <IonFabList side="top">
              <IonFabButton href='/signIn' color="light"><IonIcon icon={exitOutline} /></IonFabButton>
              <IonFabButton href='/configuration' color="light"><IonIcon icon={buildOutline} /></IonFabButton>
            </IonFabList>
        </IonFab>
        </IonContent>
      </IonPage>
      
    );
  }
};

export default PrincipalMenu;