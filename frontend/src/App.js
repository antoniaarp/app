import{BrowserRouter,Routes,Route}from"react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Maquinas from "./pages/Maquinas";
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/UpdateUser";
import AgregarMaquina from "./pages/AgregarMaquina";
import EditarMaquina from "./pages/EditarMaquina";
import Proveedores from "./pages/Proveedor";
import AgregarProveedores from "./pages/AgregarProveedor";
import EditarProveedor from "./pages/EditarProveedor";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}>
          </Route>
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/agregar" element={<AddUser/>}/>
          <Route path="/users/editar/:id" element={<UpdateUser/>}/>

          <Route path="/maquinas" element={<Maquinas/>}/>
          <Route path="/maquinas/agregar" element={<AgregarMaquina/>}/>
          <Route path="/maquinas/editar/:id" element={<EditarMaquina/>}/>

          <Route path="/proveedores" element={<Proveedores/>}/>
          <Route path="/proveedores/agregar" element={<AgregarProveedores/>}/>
          <Route path="/proveedores/editar/:id" element={<EditarProveedor/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
