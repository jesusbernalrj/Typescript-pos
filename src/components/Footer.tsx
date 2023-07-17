import { BsFillKeyboardFill } from 'react-icons/bs'

function Footer() {
  return (
    <footer className="footer py-0">
      <div className="container-fluid">
        <div className="d-flex footer-final">
         <div className="col-6">
            <div className="d-flex justify-content-center">
             <h1 className='text-white'>Total</h1>
            
            </div>
         </div>
         <div className="col-3">
          <div className="d-flex justify-content-end align-items-center">
          <button className="footer-text d-flex justify-content-end btn btn-outline-primary me-5 align-items-center" ><BsFillKeyboardFill/>Pagar</button> 
            </div>
           
         </div>
         
         <div className="col-3">
          <div className="d-flex justify-content-end align-items-center">
          <button className="footer-text d-flex justify-content-end btn btn-outline-primary me-5 align-items-center" ><BsFillKeyboardFill/>Teclado</button> 
            </div>
           
         </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer