import styled from 'styled-components'; 

export const Button = styled.div` 
position: fixed; 
width: 100%; 
// left: 96%; 
bottom: 80px; 
height: 20px; 
font-size: 3rem; 
z-index: 1; 
cursor: pointer; 
color: black; 

    .icon {
      animation: gototop 1s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(0.3rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }

    
  }

`
