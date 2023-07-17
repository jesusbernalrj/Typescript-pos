import { Link } from "react-router-dom"
import {FiLogOut} from 'react-icons/fi'
import {RiBillFill} from 'react-icons/Ri'
import {BsFillKeyboardFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'


function Navegacion() {
     
  return (
    <header className="header-top-strip  ">
     <div className="container-fluid">
      <div className="row align-items-center ">
        <div className="col-4">
        <div className="dropdown">
  <button className="header-top-button dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <GiHamburgerMenu/>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <li><a className="dropdown-items-lg" href="#">Modal#1</a></li>
  <li><a className="dropdown-items-lg" href="#"> Modal#2</a></li>
 
 

    <li><a className="dropdown-items" href="#">Factura</a></li>
    <li><a className="dropdown-items" href="#">Pantalla Completa</a></li>
    <li><a className="dropdown-items" href="#">Atajo Teclado</a></li>
   
   
  </ul>
</div>
        </div>
       <div className="col-4">
        <p className="text-white fs-4 mb-0">POS</p>
       </div>
       <div className="col-4 ">
        <div className="header-bottom d-flex">
          
          <button className="btn btn-outline-primary me-2 text-white"> <RiBillFill/> Factura</button>
          <button className="btn btn-outline-primary me-2 text-white" >Pagina Completa</button>
          <button className="btn btn-outline-primary me-2 text-white"> <BsFillKeyboardFill/> Atajo Teclado</button>
          <Link to='login' className="  header-bottom-text"><FiLogOut/></Link>
          <div className="img-user">

          </div>
        </div>
        
       </div>
      </div>

     </div>
    </header>
  )
}

export default Navegacion