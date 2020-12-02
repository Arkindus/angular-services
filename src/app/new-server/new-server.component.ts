import { SavingService } from './../saving.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
  styleUrls: ['./new-server.component.css']
})
export class NewServerComponent {

  constructor(private savSer: SavingService) {}

  onAddServer(serverName: string, serverStatus: string) {
    this.savSer.saveServer(serverName, serverStatus);
  }
}
