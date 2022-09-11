import styled from "styled-components";


export const Container = styled.div`

    display:flex ;

img{
    width:40rem ;
    height:25rem ;
    background-color:#FFF ;
    border-radius:7px ;
    margin-top:3rem ;
}
 h1{
    
    position:relative ;
    height:fit-content ;
    width:fit-content ;
    
 }
 div.sell{
   
    height:fit-content ;
    margin-top:7rem ;
    margin-left:3rem ;
    p{
        font-size:2.5rem ;
        background-color: #5533FF;
        padding:3px 30px ;
        border-radius: 30px 5px 5px 30px ;
        
    }

    div.description{
        padding:5px 10px 40px 10px ;
        margin-top:1rem ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        background-color:#FFF7AD ;
        border:1px solid #000;
        border-radius:7px ;
        gap:5px;
        span.name{
            font-size:1.5rem ;
        }
        div.link{
            border-top:1px solid #000 ;
            padding-top:10px ;
            margin-top:10px ;
        }
        
        button.icon{
            font-size:1rem ;
            background-color:#A9DC6A ;
            border:none ;
            padding:7px ;
            margin-right:4px ;
            border-radius:15px ;
            cursor: pointer;
            :hover{
                opacity:0.7 ;
            }
        }

    }

 }

`