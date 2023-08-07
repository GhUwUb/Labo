import { Component, OnInit } from '@angular/core';
import { Tournament, TournamentIndex } from 'src/app/services/tournois/tournois';
import { TournoisService } from 'src/app/services/tournois/tournois.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent{
  tournamentIndex !: TournamentIndex;

  constructor(private _tournoiService : TournoisService){
    this._tournoiService.getAllTournaments().subscribe({
      next: (tournaments: TournamentIndex) => {
        this.tournamentIndex = tournaments;
      },
      error: (error : any) => {
        console.log('Error Fetching tournaments', error);
      }
    })
  }

}
