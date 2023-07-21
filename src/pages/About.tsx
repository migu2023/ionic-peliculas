import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';

import './Home.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle>Películas React-Ionic</IonTitle>
          <IonButtons slot="start">
              <IonMenuButton/>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>ABOUT</h1>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent> 
            
    </IonPage>
  );
};

export default About;