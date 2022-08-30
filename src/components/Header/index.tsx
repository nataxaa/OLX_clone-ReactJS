import { Container } from "./style";
import {Link} from 'react-router-dom'
import { isLogged } from "../../helpers/authHandler";


export function Header(){

    let logged = false //isLogged()

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
                {logged && (
                    <ul>
                        <li><Link className="link" to={'/mycount'}>Minha Conta</Link></li>
                        <li><Link className="link" to={'/logout'}>Sair</Link></li>
                        <li><button><Link className="link-button" to={'/post-an-ad'}>Postar um anúncio</Link></button></li>
                    </ul>
                )}
                
                {!logged && (
                    <ul>
                        <li><Link className="link" to={'/signin'}>Login</Link></li>
                        <li><Link className="link" to={'signout'}>Cadastrar</Link></li>
                        <li><button><Link className="link-button" to={'/post-an-ad'}>Postar um anúncio</Link></button></li>
                    </ul>
                )}

            </div>

            </div>
        </Container>
    )
}