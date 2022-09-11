import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";





export const CartContext = createContext({});

export default function CartProvider({children}:any){

    
    const [user, setUser] = useState<any>()
    const [loading, setLoading] = useState(true)
    const [teste, setTeste] = useState([
        {id: '123', email:'natan@gmail.com'},
        {id: '1234', email:'natan2@gmail.com'}
    ])
    
       

    useEffect(()=>{
        const recoverdUser = localStorage.getItem("user")

        if(recoverdUser){
            setUser(JSON.parse(recoverdUser))
        }

        setLoading(false)

    }, [])

    function login(email:string, password:string){
        console.log("login", {email, password})

        const loggedUser = {
            id: password,
            email
        } 

        const buscaSenha:any = teste.find(props => props.id == password)
        console.log(buscaSenha)
        const buscaEmail = teste.find(props => props.email == email )
        console.log(buscaEmail)


        if(buscaSenha == buscaEmail){
            localStorage.setItem("user", JSON.stringify(loggedUser))
            setUser(loggedUser)
        }else{
            alert("senha ou email incorretos")
        }
    }

    function AddUser(email:string, password:string){
        console.log(1)
        const aux = [...teste]
        aux.push({id:password, email:email})
        setTeste(aux)
        alert("USÚRIO CADASTRADO.")
    }
    console.log(teste)
    function Logout(){
        setUser(null)
        localStorage.removeItem("user")
    }

    return(
        <CartContext.Provider value={{authenticated: !!user, user, login, Logout, AddUser}}>
            {children}
        </CartContext.Provider>
    )
}