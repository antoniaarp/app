import React, { useState, useEffect } from "react";
import logo from "../logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [contrasenia, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { usuario, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (Auth.LoginUser === 200) {
      if (email || isSuccess) {
        navigate("/dashboard");
      }
    }

    dispatch(reset());
  }, [usuario, isSuccess, dispatch, navigate]);
  const Auth = (e) => {
    e.preventDefault();
    console.log(dispatch(LoginUser({ email, contrasenia })));
  };
  return (
    <section className="hero has-background-gray is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={Auth} className="box">
                {isError && <p className="has-text-centered">{message}</p>}
                <div className="field has-text-centered">
                  <img src={logo} alt="Logo" className="logo-image" />
                </div>
                <h1 className="title has-text-centered">Login</h1>
                <div className="field">
                  <label className="label">Correo</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Correo"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Contraseña</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      value={contrasenia}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="**********"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button type="submit" className="button is-dark is-fullwidth">
                    {isLoading ? "iniciando.." : "Iniciar Sesión"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
