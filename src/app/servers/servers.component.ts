import { SavingService } from './../saving.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  @Input() serverElement: {name: string, status: string};
  @Input() index: number;

  constructor(private savSer: SavingService) {}

  onChangeInStatus(newStatus: string) {
    this.savSer.updateServerStatus(newStatus, this.index);
    this.savSer.serverUpdated.emit(newStatus);
  }
}
