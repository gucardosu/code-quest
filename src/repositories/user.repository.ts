import { pool } from "../config/database";
import { User } from "../types/user";
import { RowDataPacket, ResultSetHeader } from "mysql2";

type CreateUser = Omit<User, "id" | "created_at" | "uptdate_at">;

export class UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const [rows] = await pool.query<(User & RowDataPacket)[]>(
      "SELECT * FROM users WHERE email = ?",
      [email],
    );

    return rows[0] ?? null;
  }
}
