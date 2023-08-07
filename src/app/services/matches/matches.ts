export interface Matches{
  id : number,
  tournamentId : string,
  blackName : string,
  blackId : string,
  whiteName : string,
  whiteId : string,
  result : MatchResult,
  round : number
}

export enum MatchResult{
  NotPlayed,
  WhiteWin,
  BlackWin,
  Draw
}
