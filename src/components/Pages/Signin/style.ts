import styled from 'styled-components'

export const SigninArea = styled.div`

 margin:2rem auto ;
 width:fit-content;

 input{
   width:16rem ;
        margin-bottom:1rem ;
        padding:8px ;
        border-radius:5px ;
        outline:none ;
        border:1px solid black ;
 }

 div.area-input{
    align-items:center ;
    
 }

 form{
    display:flex ;
    flex-direction:column ;
    width:16rem ;
    align-items:center ;
 }

 label.checkbox{
    display:flex ;
    align-items:center ;
    width:12rem ;
    margin-bottom:10px ;
 }
 label.test{
    align-items:center ;
 }

 
input.check{
    width:1.5rem ;
    margin-top:9px ;
}
button{
    padding:8px ;
    border:none ;
    border-radius:8px ;
    background-color:#FF640A ;
    border:1px solid black ;
    cursor: pointer ;
    transition:0.1s ;
    color:#FFF ;
    margin-left:3.4rem ;
    margin-top:10px ;
    :hover{
        opacity:0.9 ;
    }
}
 
`

export const ErrorMensagem = styled.div`

color:black ;
background-color:red ;

`