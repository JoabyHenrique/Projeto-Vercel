const db = require("../database/database");
const bcrypt = require("bcryptjs");

// Cadastro
exports.register = async (req, res) => {
  const { nome, email, senha } = req.body;

  const senhaHash = await bcrypt.hash(senha, 10);

  db.run(
    "INSERT INTO usuarios(nome,email,senha) VALUES(?,?,?)",
    [nome, email, senhaHash],
    function (err) {
      if (err) {
        return res.status(400).json({
          erro: "Email já cadastrado"
        });
      }

      res.status(201).json({
        mensagem: "Usuário cadastrado"
      });
    }
  );
};

// Login
exports.login = (req, res) => {
  const { email, senha } = req.body;

  db.get(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
    async (err, usuario) => {

      if (!usuario) {
        return res.status(404).json({
          erro: "Usuário não encontrado"
        });
      }

      const valida = await bcrypt.compare(
        senha,
        usuario.senha
      );

      if (!valida) {
        return res.status(401).json({
          erro: "Senha inválida"
        });
      }

      res.json({
        mensagem: "Login realizado"
      });
    }
  );
};