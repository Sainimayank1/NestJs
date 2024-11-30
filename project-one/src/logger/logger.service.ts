import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
    public debug(message: string, optionalParams: object) {
        console.log(`${message}: ${JSON.stringify(optionalParams)}`);
    }

    public error(message: string, optionalParams: object) {
        console.error(`ERROR ${message}: ${JSON.stringify(optionalParams)}`);
    }

    public success(message: string, optionalParams: object) {
        console.info(`SUCCESS ${message}: ${JSON.stringify(optionalParams)}`);
    };
}