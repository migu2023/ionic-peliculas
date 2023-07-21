import { Route } from 'react-router-dom';
import { IonApp, IonIcon, IonItem, IonLabel, IonList, IonMenuToggle, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar,  } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */

import './theme/variables.css';
import About from './pages/About';
import {homeOutline, filmOutline, peopleCircleOutline, home} from 'ionicons/icons';
import Films from './pages/Films';

setupIonicReact();
// React e ionic utilizan una libreria react router que nos ayuda con el enrutamiento

const App: React.FC = () => (
  <IonApp>

    {/* definimos nuestro menú lateral Ionic */}

    <IonMenu  side='start' 
              menuId="first"
              contentId='principal'>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle>Menu Principal</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton/>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>
              <IonMenuToggle>
                <IonItem routerLink="/home" routerDirection='none' lines='none'>  
                  <IonIcon color="medium" slot="start" icon={homeOutline}></IonIcon>
                  <IonLabel>Home</IonLabel>
                </IonItem>
                <IonItem routerLink="/about" routerDirection='none' lines='none'>  
                  <IonIcon color="medium" slot="start" icon={peopleCircleOutline}></IonIcon>
                  <IonLabel>About</IonLabel>
                </IonItem>  
              </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu> 


      {/* Definimos el enrutamiento De la APP   */}

      <IonReactRouter>      
      <IonRouterOutlet id='principal'>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home}/>        
        <Route exact path="/about" component={About} />       
        <Route path="/Films/:id/:title" component={Films}/>
      </IonRouterOutlet>
    </IonReactRouter>

  </IonApp>
);

export default App;


