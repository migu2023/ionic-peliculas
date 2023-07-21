
import { IonContent, IonPage, IonToolbar, IonButtons, IonButton, IonMenuButton, IonTitle } from "@ionic/react";
import React from "react";
import {useParams} from "react-router-dom";

const Films: React.FC<any> = () => {

  // creamos las variables id y title para poder pintar el titulo y el id en la pagina Films
  let {id, title} = useParams <{id: string, title: string}>();
  

    return(
        <IonPage>
          <IonToolbar color='primary'>        
            <IonButtons slot="start">        
              <IonMenuButton/>
            </IonButtons>
          <IonTitle class="ion-text-center">Películas React-Ionic</IonTitle>          
          </IonToolbar>
          <IonContent class="ion-text-center">
            <div>
              <h1>Titulo: {title}</h1>
              <h3>ID: {id}</h3>            
            </div>
          </IonContent>        
        </IonPage>
    );
};

export default Films;