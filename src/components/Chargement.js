import React, { Fragment } from 'react';
import styled from 'styled-components';

const Chargement = () => (
    <Fragment>
        <Div  className="loader">
        </Div>
        <div style={{color:"#2B3B51", fontSize:'24px'}}>Chargement...</div>
    </Fragment>
);

const Div = styled.div`
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 10px;
    background: #349Bdb;
    border-radius: 5px;
    animation: spinner 1.8s ease-in-out infinite;
    &:before,&:before{
        position: absolute;
        display: block;
        content: "";
        animation: spinner 1.8s ease-in-out infinite;
        height: 10px;
        border-radius: 5px;
    }
    &:before{
        top: -20px;
        left: 10px;
        width: 40px;
        background: #ef4836;
    }
    &:after{
        bottom: -20px;
        width: 35px;
        background: #f5ab35;
    }

    @keyframes spinner {
        0% {
            transform: translate(40px);
        }
        50% {
            transform: translateX(-30px);
        }
        100% {
            transform: translateX(40px);
        }
        
    }
`;


export default Chargement;