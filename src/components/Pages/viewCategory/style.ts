import styled from "styled-components";

export const Container = styled.div`

display:grid ;
grid-template-columns:1fr 2fr   ;
flex-direction:column ;
gap:1rem;
background-color:#FFFACC;
margin:auto ;
margin-top:2rem ;


.link-product{
    text-decoration:none ;
    color:#000 ;
}

img{
    width:20rem ;
    background-color:#AABA9E ;
    border-radius:8px ;
}

div.products-category{
    align-items:center ;
    background-color:#FFFACC ;
    width:80% ;
}

div.product{
    padding-top:1rem ;
    padding-left:10px ;
    padding-bottom:1rem ;
    border-radius:5px ;
    border-bottom:1px solid #000;
    display:flex ;
    align-items:center ;
    gap:4rem;
    margin-top:1rem ;
    :hover{
        background-color:#FFF ;
        opacity:0.9 ;
    }
}

`

export const Sidebar = styled.div`
    margin-left:1rem ;
    
    div{
        border:1px solid #000 ;
        margin-top:3rem ;
        background-color:#FFF7AD ;
        padding:6px ;
        border-radius:7px ;
    }

    
    p.title{
        font-size:1.5rem ;
        margin-bottom:10px ;
        margin-top:1rem ;
    }

    p.name{
        font-size:1.2rem ;
        margin-bottom:1rem ;
        text-decoration:none ;
    }

    .button{
        margin-right:5px ;
    }
    
    span{
        font-size:2rem ;
        margin-top:2rem ;
        
    }
    span.link{
        margin-bottom:10px ;
        padding-bottom:10px ;
    
    }
    
    .style{
       text-decoration:none ;
        color:#000 ;
    }
    .icon{
        font-size:1.5rem ;
    }
`


export const PageContainer2 = styled.div`
h1{
    margin-left:6rem ;
}
margin:auto ;
margin-top:2rem ;

`

interface ButtonProps{
    isActive: boolean,
    activeColor: 'green' | 'normal'
}

const colors = {
    green : '#33CC95',
    normal : '#FF640A'
}


export const ButtonColor = styled.button<ButtonProps> `
border:1px solid #000;
border-radius: 6px;
cursor:pointer;
padding: 10px;
background: ${(props) => props.isActive 
    ? colors[props.activeColor]
    : colors['normal']};

`

