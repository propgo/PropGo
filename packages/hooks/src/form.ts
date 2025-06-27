import { useForm as useReactHookForm, UseFormProps } from 'react-hook-form';
import { z } from 'zod';

export const useFormWithValidation = <T extends z.ZodType>(schema: T, options?: UseFormProps<z.infer<T>>) => {
  return useReactHookForm<z.infer<T>>({
    ...options,
    mode: 'onBlur'
  });
}; 