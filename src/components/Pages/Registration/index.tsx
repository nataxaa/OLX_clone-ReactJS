import { useContext, useState } from "react";
import { CartContext } from "../../../context/Cart";
import { Button, PageContainer, PageTitle } from "../../../style/global";
import { FormArea, SearchBox } from "./style";


export function Registration(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const  {AddUser}:any = useContext(CartContext)

    function handleUser(e:any){
        e.preventDefault()
        AddUser(email, password)
        setEmail('')
        setPassword('')
    }

    return(
        <PageContainer>
            <PageTitle>Cadastrar</PageTitle>
            <FormArea>

                <label>Email</label>
                <input 
                    type="email"
                    placeholder="digite seu email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}  
                    required
                />

                <label>Digite uma senha</label>
                <input 
                    type="password"
                    placeholder="digite sua senha"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}    
                />

                <Button onClick={handleUser}>Cadastrar</Button>

            </FormArea>
        </PageContainer>
    )
}