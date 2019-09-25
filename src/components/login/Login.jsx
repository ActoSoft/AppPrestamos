import React, { useCallback } from 'react'
import './login.scss'
import {Link, withRouter, Redirect} from 'react-router-dom'
import firebase from 'firebase'
import {toast} from 'react-toastify'

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await firebase
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/dashboard");
          } catch (error) {
            toast.error("Ups! No es posible logearse.")
          }
        },
        [history]
      )

    return(
        <div className="login-container">
            <p className="login-title">Iniciar sesión</p>
            <form onSubmit={handleLogin}> 
            <div className="login-topic">
                <p>Correo</p>
                <input name="email" type="email"/>
            </div>
            <div className="login-topic">
                <p>Contraseña</p>
                <input name="password" type="password"/>
            </div>
            <Link className="link-register" to="/registro">Crea una cuenta.</Link>
            <button type="submit" className="login-button">Entrar</button>
            </form>
        </div>
        )
}

export default withRouter(Login)