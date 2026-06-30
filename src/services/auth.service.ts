import bcrypt from "bcrypt";

import { UserRepository } from "../repositories/user.repository";
import { CreateUserDTO, LoginDTO, UserResponseDTO } from "../types/user";

export class AuthService {
  private userRepository = new UserRepository();

  async register(data: CreateUserDTO): Promise<UserResponseDTO> {
    const existingUser = await this.userRepository.findByEmail(data.email);

    if (existingUser) {
      throw new Error("Email ja cadastrado.");
    }

    const password_hash = await bcrypt.hash(data.password, 10);

    const id = await this.userRepository.create({
      name: data.name,
      email: data.email,
      password_hash,
    });

    return {
      id,
      name: data.name,
      email: data.email,
    };
  }

  async login(data: LoginDTO) {}
}
