import { useEffect, useState } from "react";
import { AiOutlineCar } from "react-icons/ai";
import { BsHouseDoor, BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button, PageContainer, PageTitle, Template } from "../../../style/global";
import { ButtonColor, Container,  PageContainer2,  Sidebar } from "./style";

interface productProps{
    id: number,
    name:string,
    image:string,
    price:number
    products:any
}


export function ViewCategory({products, name, isActiveCasa, isActiveAuto, isActiveCelular}:any){

    const [small, setSmall] = useState<boolean>(false)
    const [big, setBig] = useState<boolean>(false)
    const smallProducts = products
    const bigProducts = products
    
    useEffect(()=>{
        setSmall(false)
        setBig(false)
    })

    function ShowSmallerBig(){
        smallProducts.sort(function(x:any,y:any){
            return x.price - y.price
        })
        setSmall(true)
    }

    function ShowBigSmaller(){
        bigProducts.sort(function(x:any,y:any){
            return y.price - x.price
        })
        setBig(true)
    }
    
    return(
        <PageContainer2>
            <h1>{name}</h1>
            <Container>
                <Sidebar>
                    <div>
                    <p className="title">Ordenar por Preço:</p>
                    <Button className="button" onClick={ShowBigSmaller}>Mais caro para o mais barato</Button>
                    <Button onClick={ShowSmallerBig}>Mais Barato para o mais caro</Button>
                    <p className="title">Categoria:</p>

                    <span className="link">
                        <Link to={'/ViewCategoryCasa'} className='style'>
                            <ButtonColor isActive={isActiveCasa} activeColor={'green'}>
                            <BsHouseDoor className="icon"/>
                            </ButtonColor>
                            <p className="name">Casas</p>
                        </Link>
                    </span>

                    <span className="link">
                        <Link to={'/ViewCategoryAutos'} className='style'>
                            <ButtonColor isActive={isActiveAuto} activeColor={'green'}>
                            <AiOutlineCar className="icon"/>
                            </ButtonColor>
                            <p className="name">Automoveis</p>
                        </Link>
                    </span>

                    <span className="link">
                        <Link to={'/ViewCategoryCelular'} className='style'>
                            <ButtonColor isActive={isActiveCelular} activeColor={'green'}>
                            <BsPhone className="icon"/>
                            </ButtonColor>
                            <p className="name">Celulares</p>
                        </Link>
                    </span>

                    </div>
                </Sidebar>

                <div className="products-category">

                {small && (
                <div>
                    {smallProducts.map((props:productProps)=>(
                        <Link to={`/ViewProduct/${props.id}`} className='link-product'>
                        <div className="product">
                            <img src={props.image} alt="" />
                            <p>{props.name}</p>
                            <span>R${props.price}</span>
                        </div>
                        </Link>
    
                    ))}
                </div>
                )}

                {big && (
                <div>
                    {bigProducts.map((props:productProps)=>(
                        <Link to={`/ViewProduct/${props.id}`} className='link-product'>
                        <div className="product">
                            <img src={props.image} alt="" />
                            <p>{props.name}</p>
                            <span>R${props.price}</span>
                        </div>
                        </Link>
    
                    ))}
                </div>
                )}

                {!small && !big && (
                    <div>
                            {products.map((props:productProps)=>(
                    <Link to={`/ViewProduct/${props.id}`} className='link-product'>
                    <div className="product">
                        <img src={props.image} alt="" />
                        <p>{props.name}</p>
                        <span>R${props.price}</span>
                    </div>
                    </Link>

                ))}
                    </div>
                )} 
                

                </div>

            </Container>
        </PageContainer2>
                
        
            
        
    )
}