import { AxiosError } from 'axios';
import { ERROR_CODES, ERROR_MESSAGES } from '../../constants/error';
import Logger from '../../modules/logger';

const logger = Logger.getInstance('Notifier');

const notify = (error: AxiosError) => {
  const { code } = error;
  const errorCode = (code && ERROR_CODES[code]) || ERROR_CODES.API_UNEXPECTED_ERROR;
  const message = ERROR_MESSAGES[errorCode];
  logger.warn(message);
  //TODO send error info to relict
};

export default notify;
