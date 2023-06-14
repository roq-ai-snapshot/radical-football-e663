import { PlayerExerciseInterface } from 'interfaces/player-exercise';
import { GetQueryInterface } from 'interfaces';

export interface ExerciseInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  player_exercise?: PlayerExerciseInterface[];

  _count?: {
    player_exercise?: number;
  };
}

export interface ExerciseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
