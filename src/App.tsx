import { connect } from "react-redux";
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { About } from "./components/Pages/about";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Pages/Home";
import { Template } from "./style/global";
import { NotFound } from "./components/Pages/NotFound";
import { Signin } from "./components/Pages/Signin";



export function App(props:any) {
  return (
    <div className="App">
      <Router>
       <Template>
         <Header/>
           <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
             <Route element={<NotFound/>}/>
             <Route path="/Signin" element={<Signin/>}/>
           </Routes>
         <Footer/>
       </Template>
      </Router>
    </div>
  );
}

function mapStateToProps(state:any){
  return(
    (user:any) => state.user
  )
}

function mapDispatchToProps(dispatch:any){
  return(
    null
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
