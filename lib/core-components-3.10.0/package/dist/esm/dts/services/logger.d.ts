declare const LogLevelEnum: {
    readonly none: 0;
    readonly error: 1;
    readonly warn: 2;
    readonly info: 3;
};
export type LogLevel = keyof typeof LogLevelEnum;
export declare class Logger {
    private static logWithLevel;
    static info(...messages: string[]): void;
    static warn(...messages: string[]): void;
    static error(...messages: string[]): void;
}
export {};
