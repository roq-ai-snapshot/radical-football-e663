import { ParentInterface } from 'interfaces/parent';
import { PlayerExerciseInterface } from 'interfaces/player-exercise';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  position: string;
  birth_date: any;
  created_at?: any;
  updated_at?: any;
  parent?: ParentInterface[];
  player_exercise?: PlayerExerciseInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    parent?: number;
    player_exercise?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  academy_id?: string;
  position?: string;
}
