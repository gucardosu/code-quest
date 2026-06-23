export interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  category_id: number;
  created_at: Date;
  updated_at: Date;
}
