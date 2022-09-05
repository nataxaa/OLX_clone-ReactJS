import {AreaProducts, SearchBox } from "./style";
import {Link} from 'react-router-dom'
import { PageContainer, PageTitle } from "../../../style/global";
import {AiOutlineCar} from 'react-icons/ai'
import {BsPhone, BsHouseDoor} from 'react-icons/bs'



export function Home(){
    return(
        
        <PageContainer>
            <PageTitle>Pagina Inicial</PageTitle>
            <SearchBox>
                <input 
                    type="text"
                    placeholder="Estou proucurando por..."
                />
                <div className="category">
                    <span><BsHouseDoor className="link"/> <p>Casas</p></span>
                    <span><AiOutlineCar className="link"/> <p>Automoveis</p></span>
                    <span><BsPhone className="link"/> <p>Celulares</p></span>
                </div>
            </SearchBox>
            <AreaProducts>
            oi
            </AreaProducts>
            
            
        </PageContainer>
        
    )
}