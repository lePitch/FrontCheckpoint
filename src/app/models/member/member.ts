import { Team } from '../team/team';

export class Member {
  public id: number;
  public name: string;
  public avatar: string;
  public quote: string;
  public activity: string;
  public team: Team;
}
