import {BsSearch} from 'react-icons/bs'

function ProductMain() {
  return (
    <header className="header-upper  py-3">
    <div className="container-fluid ">
   <div className=" d-flex gap-2 header-upper-form">
 
 
   <div className="col-6">
   <form className="input-group " >
 <input id='cantidad' type="text" className="form-control form-search" placeholder="Buscar"  autoComplete='off'/>
 <button className="input-group-text p-2" id="basic-addon2"><BsSearch /></button>
 
</form>
</div>
<div className='col-4'>
<select name='publisher' className='d-flex justify-content-center  ' >
 <option value='1'>Todas las categorias</option>
 <option value='Pluma'>Pluma</option>
 <option value='Cuaderno'>Cuaderno</option>
 <option value='Bolsos'>Bolsos</option>
 
</select>
</div>

 </div>
 
 </div>
</header>
  )
}

export default ProductMain