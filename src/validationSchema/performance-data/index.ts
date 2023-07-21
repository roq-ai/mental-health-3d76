import * as yup from 'yup';

export const performanceDataValidationSchema = yup.object().shape({
  week: yup.number().integer().required(),
  data: yup.string().required(),
  user_id: yup.string().nullable(),
});
