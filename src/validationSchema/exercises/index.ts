import * as yup from 'yup';
import { playerExerciseValidationSchema } from 'validationSchema/player-exercises';

export const exerciseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  player_exercise: yup.array().of(playerExerciseValidationSchema),
});
