import React from 'react';
import styled from 'styled-components';

const FooterFixed = styled.div`
  width: 100%;
  background-color: #2B3B51;
  text-align: center;
  padding:25px;
  h2{
    width:100%;
    color: #C4C4C4;
    font-size: 26px;
    font-weight:900;
    margin:0 auto;
    padding-bottom:25px;
  }
  p{
    width:100%;
    margin:0 auto;
    color:#C4C4C4;
    text-align: justify;
    text-justify: inter-word;
  }
`;
function Footer() {
  return (
          <FooterFixed>
            <h2><span style={{color:"blue"}}>BEST</span> FILMS</h2> 
            <p>Vous Chercher Toujours le Meilleur site pour voir des films complets en streaming 
              gratuit avec un contenu régulièrement mise à jour dont vous trouvez une sélection
               variée pour tous les goûts Gratuitement. Vous êtes à présent sur le bon site de film 
               streaming complet. BestFilm est un site de films en Streaming français qui vous garanti 
               un catalogue rempli des films en version français (vf), par ailleurs nous vous réservons 
               constamment des nouvelles sorties des films Streaming avec une bonne qualité.
                Aucune ouverture de compte n'est nécessaire pour voir un film streaming complet. 
                De nombreux film complet vip sont ajoutés chaque jour,
                 Envie de voir un film gratuit N'hésitez pas à ajouter film complet à vos favoris. 
                 Peu import si vous chercher des films classsiques ou des nouveaux films 2020 Nous 
                 vous offrons toujours des films en streaming complets gratuits 100% en français.
                  FilmsRip est une plateforme de film streaming (Site Streaming Fiable) complet de
                   longue date et Parmi le top des meilleurs sites gratuits de streaming en 2019 - 2020.</p>        
          </FooterFixed>
  );
}

export default Footer;