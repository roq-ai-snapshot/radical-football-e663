import { PlayerInterface } from 'interfaces/player';
import { ExerciseInterface } from 'interfaces/exercise';
import { GetQueryInterface } from 'interfaces';

export interface PlayerExerciseInterface {
  id?: string;
  player_id: string;
  exercise_id: string;
  goal: string;
  created_at?: any;
  updated_at?: any;

  player?: PlayerInterface;
  exercise?: ExerciseInterface;
  _count?: {};
}

export interface PlayerExerciseGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_id?: string;
  exercise_id?: string;
  goal?: string;
}
