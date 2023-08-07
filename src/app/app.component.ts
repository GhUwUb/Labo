import { Component, OnDestroy } from '@angular/core';
import { DataService } from './services/data/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'Labo';

  navbarIsActive ?: Boolean;
  private subscription ?: Subscription;

  constructor(private _dataService : DataService){
    this.subscription = this._dataService.navbarObs$.subscribe(value => {
      this.navbarIsActive = value;
      });

    document.addEventListener('click', this.navbarIsDisplay.bind(this))
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  navbarIsDisplay(event : MouseEvent) {

    this.subscription = this._dataService.navbarObs$.subscribe(value => {
      this.navbarIsActive = value;
      });
  }
}

