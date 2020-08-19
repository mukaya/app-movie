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
            <img src="https://icons.iconarchive.com/icons/hadezign/hobbies/256/Movies-icon.png" alt="" style={{width:50}}/>
            <h5><span style={{color:"#C4C4C4", fontSize:'14px'}}>BEST FILMS</span></h5> 
               
          </FooterFixed>
  );
}

export default Footer;