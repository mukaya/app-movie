import React from 'react';
import styled from 'styled-components';

const FooterFixed = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #2B3B51;
  text-align: center;
  z-index:5;
  p{
    color: #C4C4C4;
    font-size: 26px;
    font-weight:900;
    margin:auto 0;
  }
`;
function Footer() {
  return (
          <FooterFixed>
            <p>BEST FILMS</p>         
          </FooterFixed>
  );
}

export default Footer;