import { SavingService } from './saving.service';
import { ServersComponent } from './servers/servers.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-services';
  serverArray: {
    name: string,
    status: string
  }[];

  constructor(private savSer: SavingService) {}

  ngOnInit() {
    this.serverArray = this.savSer.savingsArray
  }

  addedServer(serverData: {name: string, status: string}) {
    this.serverArray.push({
      name: serverData.name,
      status: serverData.status
    });
  }
}
