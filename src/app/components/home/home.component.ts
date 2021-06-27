import { Component } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements CanComponentDeactivate {
  canDeactivate(nextState?: RouterStateSnapshot) {
    if (nextState?.url === '/') {
      return false;
    }

    return true;
  }
}
