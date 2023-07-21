// mediante useParamspodemos recoger los parametros que nos envían desde Cardinfo y pintarlos en este componente pelicula
import { useParams } from "react-router-dom";

// creamos const Pelicula donde vamos a pintar el titulo y el id de la película
const Pelicula = () => {

    let {id, title } = useParams();

    return(
        <div>
            <h1>{title}</h1>
            <h3>ID: {id}</h3>
        </div>
        
                
    );
        
}

export default Pelicula;