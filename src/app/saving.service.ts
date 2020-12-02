import { EventEmitter, Injectable, Output } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})

export class SavingService {
  savingsArray = [
    {
      name: 'Ankit',
      status: 'Active'
    },
    {
      name: 'Surabhi',
      status: 'Inactive'
    }
  ];
  currentServer: string;
  @Output() serverUpdated = new EventEmitter<string>();

  constructor(private ls: LoggingService) { }

  saveServer(serverName: string, serverStatus: string) {
    this.ls.saveLog(serverName, serverStatus);
    this.savingsArray.push({
      name: serverName,
      status: serverStatus
    });
  }

  updateServerStatus(updatedStatus: string, index: number) {
    this.currentServer = this.savingsArray[index].name;
    this.ls.updateLog(this.currentServer, updatedStatus);
    this.savingsArray[index].status = updatedStatus;
    this.serverUpdated.subscribe((response) => {
      alert('Server status updated: ' + response);
    });
  }
}
