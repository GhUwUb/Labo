import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDisplay : boolean = true;

  constructor(private _dataService : DataService){
    document.addEventListener('click', this.closeNavbar.bind(this))
  }

  displayNavbar(){
    this.isDisplay = !this.isDisplay;
    this._dataService.updateVariable(this.isDisplay);
  }
  closeNavbar(event : MouseEvent){
    if(this.isDisplay==true && event.clientX>300){
      this.isDisplay=false;
      this._dataService.updateVariable(this.isDisplay);
    }
  }

}
