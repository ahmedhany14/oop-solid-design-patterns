interface ILogger {
    log(message: string): void;
}


class SingletonLogger implements ILogger {
    private static instance: SingletonLogger;
    private static path: string;
    private static numberOfLogs: number;
    private constructor() {
        console.log('Hello Singleton Logger');
        SingletonLogger.numberOfLogs = 1;
    }

    public static getInstance(): SingletonLogger {
        if (!SingletonLogger.instance) {
            SingletonLogger.instance = new SingletonLogger();
        }
        return SingletonLogger.instance;
    }

    public async log(message: string) {
        const data = {
            message,
            timestamp: new Date().toISOString()
        }
        console.log(`logger number ${SingletonLogger.numberOfLogs}`, JSON.stringify(data, null, 2));
        SingletonLogger.numberOfLogs++;
    }
}


const logger1 = SingletonLogger.getInstance();
const logger2 = SingletonLogger.getInstance();

logger1.log('Hello World1');
logger1.log('Hello World2');
logger1.log('Hello World3');
logger1.log('Hello World4');

logger2.log('Hello World5');