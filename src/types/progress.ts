import { ProgressStatus } from "../enums/progress-status.enum";

export interface UserProgress {
  id: number;
  user_id: number;
  challenge_id: number;
  status: ProgressStatus;
  completed_at: Date | null;
}

export interface CreateProgressDTO {
  challenge_id: number;
}

export interface UpdateProgressDTO {
  status: ProgressStatus;
}
