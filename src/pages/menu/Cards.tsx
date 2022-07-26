import React, { useState } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/react';
import UseApi from '../../components/UseApi';

function Cards(props:any){
    var [select] = useState(props);
    const {data} = UseApi(`http://localhost:3001/dishes`);
    
    if (select ==="price"){
      return (
        <div>
          {data?.((dishes:any) =>{
          return(
            <IonCard key={dishes.price}>
              <IonCardHeader>
                <IonCardTitle>{dishes.name}</IonCardTitle>
                <IonImg src={dishes.photo}></IonImg>
                <IonCardContent>  
                <IonCardSubtitle>{dishes.description}</IonCardSubtitle>
                <IonCardTitle>Precio: {dishes.price}</IonCardTitle>
                </IonCardContent>
                <IonCardTitle>Precio: {dishes.price}</IonCardTitle>
              </IonCardHeader>
              <IonButton color="tertiary" type="submit">Comprar</IonButton>
            </IonCard>
          )
        })}
            </div>
      );
    }else if (select ==="name"){
      return (
        <div>
                {data?.map((dishes:any) =>{
          return(
            <IonCard key={dishes.name}>
              <IonCardHeader>
                <IonCardTitle>{dishes.name}</IonCardTitle>
                <IonImg src={dishes.photo}></IonImg>
                <IonCardContent>  
                <IonCardSubtitle>{dishes.description}</IonCardSubtitle>
                
                </IonCardContent>
                <IonCardTitle>Precio: {dishes.price}</IonCardTitle>
              </IonCardHeader>
              <IonButton color="tertiary" type="submit">Comprar</IonButton>
            </IonCard>
            
          )
        })}
            </div>
      );
    }else{
        return(
            <div>
                {data?.map((dishes:any) =>{
          return(
            <IonCard key={dishes.id}>
              <IonCardHeader>
                <IonCardTitle>{dishes.name}</IonCardTitle>
                <IonImg src={dishes.photo}></IonImg>
                <IonCardContent>  
                <IonCardSubtitle>{dishes.description}</IonCardSubtitle>
                
                </IonCardContent>
                <IonCardTitle>Precio: {dishes.price}</IonCardTitle>
              </IonCardHeader>
              <IonButton color="tertiary" type="submit">Comprar</IonButton>
            </IonCard>
            
          )
        })}
            </div>
        );
    }
  };
export default Cards;
