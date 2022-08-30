import { Container } from "./style";
import {Link} from 'react-router-dom'

export function Home(){
    return(
        <Container>
            <h1>Pagina Inicial</h1>
            <Link to={'/about'}>Sobre</Link>
        </Container>
    )
}