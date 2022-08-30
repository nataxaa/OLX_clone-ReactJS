import styled from 'styled-components'

export const Container = styled.header`

height:55px ;
background-color:var(--color-header) ;

display:flex ;
align-items:center ;

div.header{
    width:70rem ;
    margin: 0 auto ;
    display:flex ;
    justify-content:space-between ;
    align-items:center;
}

button{
    background-color:#FF640A ;
    border:none ;
    padding:7px ;
    border-radius:5px ;
    cursor: pointer;
    :hover{
        opacity:0.8 ;
    }
}

ul{
    display:flex ;
    gap:2rem;
    list-style:none ;
    margin-right:3rem ;
    align-items:center ;
}

span.olx{
    font-size:1.8rem ;
    font-weight:bold ;
}
span.O{
    color:#5533FF ;
}
span.L{
    color:#A9DC6A ;
    position:relative ;
    top:-4px ;
    
}
span.X{
    color:#FF640A ;
}
.link{
    text-decoration:none;
    color:#000000;
}
.link-button{
    color:#FFF ;
    text-decoration:none;
}
`