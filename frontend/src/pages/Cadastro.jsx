import '../App.css'
import { Link } from 'react-router-dom'

function Cadastro() {
  return (
    <div className="container">
      <form className="formulario">
        <h1>Cadastro de Usuário</h1>

        <input type="text" placeholder="Digite seu nome" />
        <input type="number" placeholder="Digite sua idade" />
        <input type="email" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Digite sua senha" />

        <button type="submit">
          Cadastrar
        </button>

        <p className="texto-login">
          Já possui uma conta?{' '}
          <Link to="/login">
            Entrar
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Cadastro