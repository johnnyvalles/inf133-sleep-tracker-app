import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-overnight-sleep',
  templateUrl: 'overnight-sleep.page.html',
  styleUrls: ['overnight-sleep.page.scss']
})
export class OvernightSleepPage {

  constructor(public sleepService: SleepService) {
    
  }

}
