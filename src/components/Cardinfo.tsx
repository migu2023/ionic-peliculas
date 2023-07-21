
import { IonCol, IonContent, IonGrid, IonButton, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router';



 const Cardinfo: React.FC<any> = (props:any) => { 

      
  // definimos la constante imagen para que nos lleve a la url de la imagen
      const imagen: any = "https://image.tmdb.org/t/p/w220_and_h330_face/" + props.pelicula.poster_path;

      const history = useHistory();

      //  definimos  la constante ruta mediante el metodo useHistory y el método push para que al hacer click nos lleve a la página Films
      const ruta = () => {
        history.push(`/Films/${props.pelicula.id}/${props.pelicula.title}`);
      }

    // retornamos la imagen, la fecha y el título para pintarlos en nuestro componente Cardinfo
     return (   
            
            <IonCard color={'light'} button onClick={ruta}>
            <img src={imagen} />
              <IonCardHeader >

                <IonCardTitle   
                >{props.pelicula.title}
                </IonCardTitle> 

                <IonCardSubtitle 
                >Fecha: {props.pelicula.release_date}
                </IonCardSubtitle>

              </IonCardHeader>

                <IonCardContent class="ion-padding"> 
                  {props.pelicula.overview}
                </IonCardContent> 

            </IonCard>  
    
     );
 }
//  exportamos nuestro componente 
 export default Cardinfo