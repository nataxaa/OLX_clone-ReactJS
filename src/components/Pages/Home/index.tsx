import {AreaProducts, SearchBox } from "./style";
import {Link} from 'react-router-dom'
import { PageContainer, PageTitle } from "../../../style/global";
import {AiOutlineCar} from 'react-icons/ai'
import {BsPhone, BsHouseDoor} from 'react-icons/bs'
import { ShowProducts } from "../../../data/data";

interface productsProps{
    id: number,
    name:string,
    price:number,
    image:string
}

export function Home(){
    const products = ShowProducts
    

    return(
        
        <PageContainer>
            <PageTitle>Pagina Inicial</PageTitle>
            <SearchBox>
                <input 
                    type="text"
                    placeholder="Estou proucurando por..."
                />
                <div className="category">
                    <span>
                        <Link to={'/ViewCategoryCasa'} className='link-category'>
                            <BsHouseDoor className="link"/>
                            <p>Casas</p>
                        </Link>
                    </span>
                    <span>
                        <Link to={'/ViewCategoryCelular'} className='link-category'>
                            <BsPhone className="link"/>
                            <p>Celular</p>
                        </Link>
                    </span>
                    <span>
                        <Link to={'/ViewCategoryAutos'} className='link-category'>
                            <AiOutlineCar className="link"/>
                            <p>Automoveis</p>
                        </Link>
                    </span>
                </div>
            </SearchBox>
            <AreaProducts>
            {products.map((product: productsProps) => (
                <div>
                    <p>{product.name}</p>
                    <img src={product.image} alt="imagem do produto" />
                </div>
            ))}

            </AreaProducts>
            
        </PageContainer>
        
    )
}