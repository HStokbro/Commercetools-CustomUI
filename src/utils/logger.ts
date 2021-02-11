// Need to disable eslint for use of console
/* eslint-disable */
const logger = {
  error(message: string, error: any, data?: any): void {
    console.error(message, error, data);
  },
};

export default logger;
