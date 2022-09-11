import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/Cart"
import { PageContainer, PageTitle } from "../../../style/global"
import { Container } from "./style"

export function AddPost(){

    const  {authenticated}:any = useContext(CartContext)

    console.log(authenticated)
    return(
        <PageContainer>
            <PageTitle>Adicionar Postagem</PageTitle>
            <Container>
            {!authenticated && (
                <div className="notification">
                    <h1>Usuario não logado, <Link to={'/signin'}>faça o login</Link> para postar seu produto...</h1>
                </div>
            )}
            </Container>
        </PageContainer>
    )
}