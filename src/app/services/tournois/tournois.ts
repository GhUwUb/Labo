import { Matches } from "../matches/matches";
import { Member } from "../member/member";

export interface Tournament {
  id : string,
  name : string,
  location : string,
  minPlayers : number,
  maxPlayers : number,
  eloMin : number,
  eloMax : number,
  categories : TournamentCategory[],
  womenOnly : boolean,
  endOfRegistrationDate : string,
  count : number,
  canRegister : boolean,
  isRegistered : boolean,
  status : TournamentStatus,
  currentRound : number,
  players : Member[],
  canStart : boolean,
  canValidateRound : boolean,
  matches : Matches[]
}

export interface TournamentIndex {
  total : number,
  results : Tournament[]
}

export enum TournamentCategory{
  Junior,
  Senior,
  Veteran
}
export enum TournamentStatus{
  WaitingForPlayers,
  InProgress,
  Closed
}
