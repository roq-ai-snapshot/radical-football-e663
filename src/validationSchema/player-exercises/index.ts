import * as yup from 'yup';

export const playerExerciseValidationSchema = yup.object().shape({
  goal: yup.string().required(),
  player_id: yup.string().nullable().required(),
  exercise_id: yup.string().nullable().required(),
});
