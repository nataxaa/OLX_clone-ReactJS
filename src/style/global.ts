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
background-color:#5533FF;
height: 100vh ;

`
export const PageContainer = styled.div`
max-width:1200px ;
margin:auto ;
margin-top:2rem ;
`
export const PageTitle = styled.h1`
color:#FFF ;
`

