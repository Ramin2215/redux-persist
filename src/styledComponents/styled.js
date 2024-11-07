import styled from "styled-components";


export const Button = styled.button `
color: red;
background-color: blue;
border-radius: 10px;
padding: 10px 40px;
margin: 10px;
`


export const Header = styled.header`

display: flex;
justify-content: space-between;
padding: 10px 20px;
background-color: yellow;
color: red;
&:hover {
    background-color: red;
    div{
        background-color: aliceblue;
    }
  }

`