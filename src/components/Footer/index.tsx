import { Container } from "./style";
import {FiInstagram, FiYoutube, FiFacebook} from 'react-icons/fi'


export function Footer(){
    return(
        <Container>
            <div className="links">
                <a href="https://www.instagram.com"><FiInstagram/></a>
                <a href="https://www.youtube.com"><FiYoutube/></a>
                <a href="https://www.facebook.com"><FiFacebook/></a>
            </div>
            <p>made by Natan Xavier</p>
        </Container>
    )
}