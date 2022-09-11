import styled from 'styled-components'

export const SearchBox = styled.div`
box-shadow: 1px 2px 2px #000;
display:flex ;
flex-direction:column ;
align-items:center ;
margin-left:30rem ;
margin-top:-2.5rem ;
width:40rem ;
position:relative ;
right:3.5rem ;
background-color: #FFF7AD ;
padding:15px ;
border-radius:5px ;

.link-category{
    text-decoration:none ;
    color:#000 ;
    border-radius:8px ;
    transition:0.3s ;
    :hover{
        background-color:#A9DC6A ;
    }
}



input{
    
    ::placeholder{
        font-size:1.2rem ;
    }
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

margin-top:2rem ;
width:100% ;
height:10rem ;
display:grid ;
grid-template-columns: repeat(4, 1fr) ;
img{
    width:10rem ;
    height:14rem ;
}

div{
    background-color:#FFF7AD ;
    margin-right:10px ;
    display:flex ;
    flex-direction:column ;
    align-items: center;
    border-radius:7px ;
    box-shadow: 1px 2px 2px #000;
}
`