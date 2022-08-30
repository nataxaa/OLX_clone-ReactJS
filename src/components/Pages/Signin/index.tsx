import { useState } from "react";
import { PageContainer, PageTitle } from "../../../style/global";
import { SigninArea } from "./style";
import OlxApi from '../../../helpers/OlxApi'




export function Signin(){
    const api = OlxApi()
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [check , setCheck] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [error, setError] = useState('')

    async function handleSubmit(e:any){
        e.preventDefault()

        const json = await api.login(email as any, password as any)

        if(json.error){
            setError(json.error)
        }

    }


    return(
        <PageContainer>
            <PageTitle>Login</PageTitle>
                <SigninArea>
                    <form>
                        <label>
                            <div className="area-title">E-mail</div>
                            <div className="area-input">
                                <input
                                 type="email"
                                 value={email}
                                 onChange={e=>setEmail(e.target.value)}    
                                />
                            </div>
                        </label>
                        <label>
                            <div className="area-title">Senha</div>
                            <div className="area-input">
                                <input
                                 type="password"
                                 value={password}
                                 onChange={e=>setPassword(e.target.value)}
                                 />
                            </div>
                        </label>
                        <label className="checkbox">
                            <div className="area-input-check">
                                <input 
                                    className="check"
                                    type="checkbox"
                                    
                                    />
                            </div>
                            <p>Lembrar Senha</p>
                        </label>
                        <label>
                            <div className="area-title"></div>
                            <div className="area-input"><button>Fazer Login</button></div>
                        </label>
                    </form>
                </SigninArea>
        </PageContainer>
    )
}