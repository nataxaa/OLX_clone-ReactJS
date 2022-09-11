import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrayCarro, ArrayHouse, ArrayPhone, TotalProducts } from "../../../data/data";
import { Button, PageContainer } from "../../../style/global";
import { Container } from "./style";
import {AiOutlineMail, AiFillPhone, AiFillFacebook} from 'react-icons/ai'
import {SiBookstack} from 'react-icons/si'


export function ViewProduct(){

    const [product, setProduct] = useState<any>()
    const {id} = useParams();

    const produtos1 = TotalProducts
    


    const item1 = produtos1.find((products)=> products.id == id as unknown as number)
    

    
    
    
    
    

    return(
        <PageContainer>
            <Container>
            <div>
                <h1>{item1?.name}</h1>
                <img src={item1?.image} alt="" />
            </div>

            <div className="sell">
                <p>R${item1?.price},00</p>
                <div className="description">
                    <span className="name">Bruno</span>
                    <Button>Comprar</Button>
                    <span className="acesso">ultimo acesso há 1 dia</span>
                    <div className="link">
                        <span>verificado com: </span>
                        <button className="icon"><AiOutlineMail/></button>
                        <button className="icon"><AiFillPhone/></button>
                        <button className="icon"><AiFillFacebook/></button>
                    </div>
                </div>
            </div>
            
            </Container>
        </PageContainer>
    )
}