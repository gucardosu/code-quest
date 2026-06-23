import "dotenv/config";
import app from "./app";
import { pool } from "./config/database";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    const connection = await pool.getConnection();
    connection.release();

    console.log("Banco conectado");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao conectar no banco:", error);
    process.exit(1);
  }
}

startServer();
