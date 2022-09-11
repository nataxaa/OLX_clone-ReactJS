import { connect } from "react-redux";
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { About } from "./components/Pages/about";
import { Header } from "./components/Header";
import { Home } from "./components/Pages/Home";
import { Template } from "./style/global";
import { NotFound } from "./components/Pages/NotFound";
import { Signin } from "./components/Pages/Signin";
import { Registration } from "./components/Pages/Registration";
import { ViewCategory } from "./components/Pages/viewCategory";
import {ArrayCarro, ArrayHouse, ArrayPhone} from './data/data'
import { ViewProduct } from "./components/Pages/viewProduct";
import { AddPost } from "./components/Pages/AddPost";
import { MyCount } from "./components/Pages/MyCount";


export function App(props:any) {
  return (
    <div className="App">
      <Router>
       <Template>
         <Header/>
           <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="MyCount" element={<MyCount/>}/>
             <Route element={<NotFound/>}/>
             <Route path="/Signin" element={<Signin/>}/>
             <Route path="/Registration" element={<Registration/>}/>
             <Route path="/ViewCategoryCasa" element={<ViewCategory products={ArrayHouse} name={'Casas'} isActiveCasa={true} isActiveAuto={false} isActiveCelular={false}/>}/>
             <Route path="/ViewCategoryCelular" element={<ViewCategory products={ArrayPhone} name={'Celulares'} isActiveCasa={false} isActiveAuto={false} isActiveCelular={true}/>}/>
             <Route path="/ViewCategoryAutos" element={<ViewCategory products={ArrayCarro} name={'Automoveis'} isActiveCasa={false} isActiveAuto={true} isActiveCelular={false}/>}/>
             <Route path="/ViewProduct/:id" element={<ViewProduct/>}/>
             <Route path="/AddPost" element={<AddPost/>}/>
           </Routes>
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
