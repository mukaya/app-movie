import styled from 'styled-components';

export const ContainerCard = styled.div`
width: 90%;
margin: 100px auto;
.ligne{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
  
    .card {
        width: 20%;
        background: #fff;
        border: 1px solid #ccc;
        margin-bottom: 50px;
        transition: 0.3s;
        margin:5px;
      }
}
.card{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
}
.card-header{
    text-align: center;
    padding: 50px 10px;
    background: linear-gradient(to right, #ff416c, #ff4b2b);
    color: #fff;
}
.card-body{
    padding: 30px 20px;
    text-align: center;
    font-size: 18px;

    .btn{
        display: block;
        color: #fff;
        text-align: center;
        background: linear-gradient(to right,#2B3B51, #2B3B78);
        margin-top: 30px;
        text-decoration: none;
        padding: 10px 5px;
        border-radius:100px;
    }
}
.card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
  }
  @media screen and (max-width: 1000px) {
    .ligne{
        .card {
            width: 40%;
          }
    }
  }
  
  @media screen and (max-width: 620px) {
    width: 100%;
    .ligne{
        .card {
            width: 80%;
          }
    }
  }
`;