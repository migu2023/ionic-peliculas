import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react';
import './Home.css';
import peliculasJSON from '../assets/movies.json';
import Cardinfo from '../components/Cardinfo';



const Home: React.FC = () => {

  // hacemos el slice para solo traer los datos de 6 peliculas del archivo JSON
const peliculas = peliculasJSON.slice(0,6); 

// hacemos el map para poder recorrer el array de las 6 peliculas y que nos pinte las seis películas desde el componente Cardinfo
// que lo pintará seis veces
    
const listPeliculas = peliculas.map((pelicula: any) => {    
    return <Cardinfo key={pelicula.id} pelicula={pelicula}/>   
  });
  
  //  construimos la página home con su toolbar y su contenido
  return (
    <IonPage >
      <IonHeader>        
        <IonToolbar color='primary'>        
          <IonButtons slot="start">        
            <IonMenuButton/>
          </IonButtons>
              <IonTitle class="ion-text-center" >Películas React-Ionic</IonTitle>          
        </IonToolbar>
      </IonHeader >
      <IonContent >
        <IonGrid >
          <IonRow justify-content-center >
            <IonCol class="ion-text-center" size-xl="5" size-lg="6" size-md="9" size-xs="12">
              <h1>PELICULAS REACT-IONIC</h1>              
              <h2> Películas recientes</h2>
              <div className="peliculas">
                  {peliculas.map((pelicula:any) => {
                  return <Cardinfo key={pelicula.title} pelicula={pelicula}></Cardinfo>
                  })}
              </div> 
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>             
    </IonPage>
  );
};

export default Home;
