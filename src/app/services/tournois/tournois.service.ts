import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournament, TournamentIndex } from './tournois';

@Injectable({
  providedIn: 'root'
})
export class TournoisService {

  readonly URL : string = "https://khun.somee.com/api"

  constructor(private _httpService : HttpClient ) {}

  getAllTournaments() : Observable<TournamentIndex>{
    return this._httpService.get<TournamentIndex>(this.URL + "/Tournament");
  }
  getTournament(id : string) : Observable<Tournament> {
    return this._httpService.get<Tournament>(this.URL + "/Tournament" + id);
  }
  postTournament(tournamentToAdd : Tournament) : Observable<String>{
    return this._httpService.post<string>(this.URL + "/Tournament", tournamentToAdd)
  }
  deleteTournament(id : string){
    this._httpService.delete(this.URL + "/Tournament" + id);
  }

}
