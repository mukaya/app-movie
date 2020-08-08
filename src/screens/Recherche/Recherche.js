import React from 'react'
import Spinner from '../../components/Spinner';
import { ContainerCard } from '../AllFilms/style';
import { Link } from 'react-router-dom';

const Recherche = () => {
    return (
        <ContainerCard>
            {/* <Spinner/> */}
            <div className="ligne">
            <div className="card" >
                     <img style={{width:'100%'}} src="https://res.cloudinary.com/dux8omdin/image/upload/v1593893737/wgt6dblfv0gsnnsu2all.jpg" alt=""/>
                    <div className="card-body">
                    <p>
                        Lumière Kabwe
                    </p>
                    <Link to="" className="btn">Voir le detail</Link>
                </div>
            </div>
            </div>
        </ContainerCard>
    )
}

export default Recherche
