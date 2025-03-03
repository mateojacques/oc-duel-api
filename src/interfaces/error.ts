export interface IHttpErrorInfo {
    httpCode?: number;
    extraInfo?: string;
    frontCode?: number;
    logError?: boolean;
    ignoreLogging?: boolean;
    error?: string;
    errors?: any;
  }