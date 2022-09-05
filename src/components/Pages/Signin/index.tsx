import { useContext, useState } from "react";
import { PageContainer, PageTitle } from "../../../style/global";
import { ErrorMensagem, SigninArea } from "./style";
import OlxApi from '../../../helpers/OlxApi'
import { doLogin } from "../../../helpers/authHandler";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/Cart";




export function Signin(){

    const  {login, authenticated}:any = useContext(CartContext)

    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [remember, setRemember] = useState(false)
    const [check , setCheck] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [error, setError] = useState('')
    const navigate = useNavigate(); 
    
      function handleSubmit(e:any){
        e.preventDefault()
        login(email, password)
        console.log("submit", {email, password})
        if(authenticated){
            navigate("/")
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
                                    disabled={disabled}
                                    type="email"
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)}    
                                    required
                                />
                            </div>
                        </label>
                        <label>
                            <div className="area-title">Senha</div>
                            <div className="area-input">
                                <input
                                    disabled={disabled}
                                    type="password"
                                    value={password}
                                    onChange={e=>setPassword(e.target.value)}
                                    required
                                 />
                            </div>
                        </label>
                        <label className="checkbox">
                            <div className="area-input-check">
                                <input 
                                    className="check"
                                    type="checkbox"
                                    disabled={disabled}
                                    />
                            </div>
                            <p>Lembrar Senha</p>
                        </label>
                        <label>
                            <div className="area-title"></div>
                            <div className="area-input"><button onClick={handleSubmit}>Fazer Login</button></div>
                        </label>
                    </form>
                </SigninArea>
        </PageContainer>
    )
}