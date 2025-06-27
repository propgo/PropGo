export const VALIDATION_RULES = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_TITLE_LENGTH: 100,
  PHONE_REGEX: /^(\+?6?01)[0-46-9]-*[0-9]{7,8}$/,
} as const; 