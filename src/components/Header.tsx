import { CSSProperties, useContext } from 'react'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import { PosContext } from '../context/PosContext'



function Header() {
  const {data, updateData} = useContext(PosContext)
  console.log(data)
  const styles: CSSProperties = {
    color: 'white', width: '1.3rem', height: '1.3rem', position:'absolute', top:18, right: '0rem', transform: "translate(25%, 25%)"
  }
 
  return (
    
    <nav className="d-flex gap-2">
   <button className="btn btn-outline-dark btn-main" ><AiOutlineMinusCircle/></button>
   <button className='btn btn-outline-dark mt-5'  value={data} onClick={() => updateData}  style={{position: 'relative'}}>1
   <div className="d-flex justify-content-center align-items-center rounded-circle bg-danger " style={styles}></div></button>
   <button className='btn btn-outline-dark mt-5' style={{position: 'relative'}} >2
   <div className="d-flex justify-content-center align-items-center rounded-circle bg-danger" style={styles}></div></button>
   
   <button className="btn btn-outline-dark btn-main" ><AiOutlinePlusCircle/></button>
   
  </nav>
  
  )
}

export default Header