import {Link} from 'react-router-dom'

export function NotFound(){
    console.log("noa")
    return(
        <div>
            <h1>Pagina 404</h1>
            <Link to={'/'}>Voltar Para a Home</Link>
        </div>
    )
}