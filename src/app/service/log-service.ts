import { Log } from "../model/log";
import { Injectable } from "@angular/core";
import { Logs } from "../mockData/mock-logs";

@Injectable()
export class LogService{
    getLogs():Promise<Log[]>
    {
        return Promise.resolve(Logs);
    }
}