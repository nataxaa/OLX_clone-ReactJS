import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
  --color-header: #FFF
}


*{
  margin: 0 ;
  padding: 0 ;
 
}

`

export const Template = styled.div`
font-family:'Roboto', sans-serif;
background-color:#FFFACC;
height:100vh ;


`
export const PageContainer = styled.div`
max-width:1200px ;
margin:auto ;
margin-top:2rem ;



`
export const PageTitle = styled.h1`
color:#000 ;

`
export const Button = styled.button`
background-color:#FF640A ;
    border:none ;
    padding:7px ;
    border-radius:5px ;
    border:1px solid black ;
    cursor: pointer;
    :hover{
        opacity:0.8 ;
    }
`

