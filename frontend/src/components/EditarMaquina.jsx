import React from 'react'

const EditarMaquina = () => {
    return (
        <div>
          <h1 className="title">Maquinas</h1>
          <h2 className="subtitle">Editar Maquina</h2>
          <div className="card is-shadowless">
            <div className="card-content">
                <div className="content"> 
                <form>
                     
                    <div className="field">
                        <label className="label">Descripcion</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Descripcion' />
                         </div>
                    </div>
                    <div className="field">
                        <label className="label">Registro</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Registro' />
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

export default EditarMaquina
