import { Difficulty } from "../enums/difficulty.enum";

export interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  category_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface CreateChallengeDTO {
  title: string;
  description: string;
  difficulty: Difficulty;
  category_id: number;
}

export interface UpdateChallengeDTO {
  title?: string;
  description?: string;
  difficulty?: Difficulty;
  category_id?: number;
}
