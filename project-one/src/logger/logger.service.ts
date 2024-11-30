import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
    public debug(message: string, optionalParams?: object) {
        console.debug(`${message}${optionalParams ? `: ${JSON.stringify(optionalParams)}` : ''}`);
    }

    public error(message: string, optionalParams?: object) {
        console.error(`ERROR ${message}${optionalParams ? `: ${JSON.stringify(optionalParams)}` : ''}`);
    }

    public success(message: string, optionalParams?: object) {
        console.info(`SUCCESS ${message}${optionalParams ? `: ${JSON.stringify(optionalParams)}` : ''}`);
    }
}