export interface UserProgress {
  id: number;
  user_id: number;
  challenge_id: number;
  status: "pending" | "completed";
  completed_at: Date | null;
}
