import './App.css'

function App() {
  return (
    <div className="container">
      <form className="formulario">
        <h1>Cadastro de Usuário</h1>

        <input
          type="text"
          name="nome"
          placeholder="Digite seu nome"
        />

        <input
          type="number"
          name="idade"
          placeholder="Digite sua idade"
        />

        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
        />

        <input
          type="password"
          name="senha"
          placeholder="Digite sua senha"
        />

        <button type="submit">
          Cadastrar
        </button>

        <p className="texto-login">
          Já possui uma conta? <a href="#">Entrar</a>
        </p>
      </form>
    </div>
  )
}

export default App