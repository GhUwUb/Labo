import { Member } from "../member/member";

export interface TokenDTO{
  token ?: string,
  user : Member;
}
