import { Container } from "./style";
import {Link} from 'react-router-dom'
import { isLogged } from "../../helpers/authHandler";
import { useContext } from "react";
import { CartContext } from "../../context/Cart";
import { Button } from "../../style/global";



export function Header(){

    let logged = false //isLogged()
    const  {login, authenticated, Logout}:any = useContext(CartContext)

    return(
        <Container>
            <div className="header">
           <Link className="link" to={'/'}>
            <span className="olx">
                 <span className="O">O</span>
                 <span className="L">L</span>
                 <span className="X">X</span>
            </span>
           </Link>

            <div>
                {authenticated && (
                    <ul>
                        <li><Link className="link" to={'/mycount'}>Minha Conta</Link></li>
                        <li><button onClick={Logout}>Sair</button></li>
                        <li><button><Link className="link-button" to={'/post-an-ad'}>Postar um anúncio</Link></button></li>
                    </ul>
                )}
                
                {!authenticated && (
                    <ul>
                        <li><Link className="link" to={'/signin'}>Login</Link></li>
                        <li><Link className="link" to={'/Registration'}>Cadastrar</Link></li>
                        <li>
                            <Button>
                                <Link className="link-button" to={'/post-an-ad'}>Postar um anúncio</Link>
                            </Button>
                        </li>
                    </ul>
                )}

            </div>

            </div>
        </Container>
    )
}