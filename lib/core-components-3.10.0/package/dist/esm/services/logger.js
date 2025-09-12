import { SaffronConfig } from './config.js';

const LogLevelEnum = {
    none: 0,
    error: 1,
    warn: 2,
    info: 3,
};
class Logger {
    static logWithLevel(messages, level = 'info') {
        if (LogLevelEnum[SaffronConfig.logLevel] >= LogLevelEnum[level]) {
            console[level](...messages);
        }
    }
    static info(...messages) {
        this.logWithLevel(messages, 'info');
    }
    static warn(...messages) {
        this.logWithLevel(messages, 'warn');
    }
    static error(...messages) {
        this.logWithLevel(messages, 'error');
    }
}

export { Logger };
