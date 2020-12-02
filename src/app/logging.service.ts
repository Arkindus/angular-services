import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LoggingService {
  saveLog(serverName: string, serverStatus: string) {
    console.log(serverName + ' created, with status: ' + serverStatus);
  }

  updateLog(serverName: string, updatedStatus: string) {
    console.log('Server ' + serverName + ' status updated to: ' + updatedStatus);
  }
}
