import styled from "styled-components";


export const Container = styled.div ` 
    /* width: 100vw; */
    font-family: tahoma;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* height: 100vh; */
    background-image: url(https://picsum.photos/g/3000/2000);
    background-size:cover;
    background-position: center;
    /* justify-content: center;
    align-items: center; */

    .row{
        margin-top:20px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        /* overflow-x: auto; */
    }
  
  .our-team {
    padding: 30px 0 40px;
    margin-bottom: 30px;
    background-color: #f7f5ec;
    text-align: center;
    overflow: hidden;
    position: relative;
    padding: 30px;
    height: 350px;
    width: 200px;
    margin-top: 15px;
  }

  .our-team .picture {
    display: inline-block;
    width: 130px;
    margin-bottom: 50px;
    z-index: 0;
    position: relative;
  }

  .our-team .picture .img-fluid-felipe {
    display: inline-block;
    height: 100px;
    width: 130px;
    z-index: 0;
    position: relative;
    border:1px solid purple;
  }
  
  .our-team .picture::before {
    content: "";
    width: 100%;
    height: 0;
    border-radius: 50%;
    background-color: purple;
    position: absolute;
    bottom: 135%;
    right: 0;
    left: 0;
    opacity: 0.9;
    transform: scale(3);
    transition: all 0.3s linear 0s;
  }
  
  .our-team:hover .picture::before {
    height: 100%;
  }
  
  .our-team .picture::after {
    content: "";
    width: 100%;
    height: 87%;
    border-radius: 50%;
    background-color:purple;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  
  .our-team .picture img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    border: 1px solid purple;
    transform: scale(1);
    transition: all 0.9s ease 0s;
  }
  
  .our-team:hover .picture img {
    box-shadow: 0 0 0 14px #f7f5ec;
    transform: scale(0.7);
  }
  
  .our-team .title {
    display: block;
    font-size: 15px;
    color: #4e5052;
    text-transform: capitalize;
  }
  
  .our-team .social {
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: purple;
    position: absolute;
    bottom: -100px;
    left: 0;
    transition: all 0.5s ease 0s;
  }
  
  .our-team:hover .social {
    bottom: 0;
  }
  
  .our-team .social li {
    display: inline-block;
  }
  
  .our-team .social li a {
    display: block;
    padding: 10px;
    font-size: 17px;
    color: white;
    transition: all 0.3s ease 0s;
    text-decoration: none;
  }
  
  .our-team .social li a:hover {
    color: purple;
    background-color: #f7f5ec;
  }
  
  @media (min-width: 690px) {
      height: 100vh;
    
  }

  `;