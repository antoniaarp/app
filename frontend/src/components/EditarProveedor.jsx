import React from 'react'

const EditarProveedor = () => {
    return (
        <div>
          <h1 className="title">Proveedores</h1>
          <h2 className="subtitle">Editar Proveedor</h2>
          <div className="card is-shadowless">
            <div className="card-content">
                <div className="content"> 
                <form>
                     
                    <div className="field">
                        <label className="label">Nombre</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Nombre' />
                         </div>
                    </div>
                    <div className="field">
                        <label className="label">Correo</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Correo' />
                         </div>
                    </div>
                    <div className="field">
                        <label className="label">Contacto</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Contacto' />
                         </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button className="button is-dark">Actualizar</button>
                        </div>
                           
                        </div>
                            
                </form>
                </div>
            </div>
          </div>
    
        </div>
      )
}

export default EditarProveedor
