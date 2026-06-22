import '../App.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="container">
      <form className="formulario">
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Digite seu e-mail"
        />

        <input
          type="password"
          placeholder="Digite sua senha"
        />

        <Link to="/dashboard">
          <button type="button">
            Entrar
          </button>
        </Link>
      </form>
    </div>
  )
}

export default Login