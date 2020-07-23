import { Member } from '../member/member';
import { Hackathon } from '../hackathon/hackathon';

export class Team {
  public id: number;
  public members: Member[];
  public name: string;
  public hackathon: Hackathon;
  public avatar: string;
}
