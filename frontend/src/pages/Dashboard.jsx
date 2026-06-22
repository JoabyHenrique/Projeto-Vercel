import '../App.css'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="container">
      <div className="formulario">
        <h1>Dashboard</h1>

        <p
          style={{
            color: '#fff',
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          Bem-vindo ao sistema!
        </p>

        <button>
          Ver Perfil
        </button>

        <button
          style={{
            marginTop: '10px',
            background: '#dc2626'
          }}
        >
          Sair
        </button>

        <p className="texto-login">
          <Link to="/">
            Voltar ao Cadastro
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Dashboard