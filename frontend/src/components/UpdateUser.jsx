import React from 'react'

const UpdateUser = () => {
  return (
    <div>
      <h1 className="title">Usuarios</h1>
      <h2 className="subtitle">Editar un Usuario</h2>
      <div className="card is-shadowless">
        <div className="card-content">
            <div className="content"> 
            <form>
                 
                <div className="field">
                    <label className="label">Usuario</label>
                    <div className="control">
                        <input type="text" className="input" placeholder='Usuario' />
                     </div>
                </div>
                <div className="field">
                    <label className="label">Correo</label>
                    <div className="control">
                        <input type="text" className="input" placeholder='Correo' />
                     </div>
                </div>
                <div className="field">
                    <label className="label">Contraseña</label>
                    <div className="control">
                        <input type="contrasenia" className="input" placeholder='**********' />
                    </div>
                 </div>
                 <div className="field">
                    <label className="label">Confirmar Contraseña</label>
                    <div className="control">
                        <input type="contrasenia" className="input" placeholder='**********' />
                    </div>
                 </div>
                 <div className="field">
                    <label className="label">Rol</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select>
                                <option value="admin">Admin</option>
                                <option value="operador">Operador</option>
                                <option value="mecanico">Mecanico</option>
                            </select>
                        </div>
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

export default UpdateUser
