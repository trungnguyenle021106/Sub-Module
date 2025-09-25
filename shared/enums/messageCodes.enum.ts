export enum MessageCodes {
    // Common
    SUCCESS = 'success',
    ERROR = 'error',
    MISSING_DATA = 'missing request data',
    UNEXPECTED_ERROR = 'unexpected error',
    INTERNAL_ERROR = "internal server error",

    // Accounts
    ACCOUNT_NOT_FOUND = 'account not found',
    USERNAME_ALREADY_EXISTS = 'username already exists',

    // Authentication
    INVALID_CREDENTIALS = 'invalid username or password',
    ACCOUNT_BANNED = 'account is banned',
}
