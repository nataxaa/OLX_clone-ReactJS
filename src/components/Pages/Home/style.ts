import styled from 'styled-components'

export const SearchBox = styled.div`
display:flex ;
flex-direction:column ;
align-items:center ;
margin:1rem auto 0;
width:80rem ;
position:relative ;
right:3.5rem ;
background-color: #FF640A ;
padding:15px ;
border-radius:5px ;

input{
    width:100% ;
    height:3rem ;
    border-radius:7px ;
    border:1px solid #000 ;
}

div.category{
    margin-top:1rem ;
    display:flex ;
    gap:1rem;
    .link{
        background-color:#FFF ;
        font-size:1.5rem ;
        padding:15px ;
        border-radius:20px ;
        margin-bottom:5px ;
        cursor: pointer;
        :hover{
            opacity:0.9 ;
        }
    }
    span{
        align-items:center ;
        display:flex ;
        flex-direction:column ;
    }
}

`

export const AreaProducts = styled.div`

background-color:#EAECEC ;
width:100% ;
height:15rem ;

`