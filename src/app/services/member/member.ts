export interface Member {
  id : string,
  username : string,
  email : string,
  birthDate : Date,
  elo : number,
  gender : UserGender,
  role : UserRole
}
export enum UserGender{
  Female,
  Male,
  Other
}
export enum UserRole{
  Admin,
  Player
}
