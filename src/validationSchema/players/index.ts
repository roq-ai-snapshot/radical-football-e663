import * as yup from 'yup';
import { parentValidationSchema } from 'validationSchema/parents';
import { playerExerciseValidationSchema } from 'validationSchema/player-exercises';

export const playerValidationSchema = yup.object().shape({
  position: yup.string().required(),
  birth_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  parent: yup.array().of(parentValidationSchema),
  player_exercise: yup.array().of(playerExerciseValidationSchema),
});
