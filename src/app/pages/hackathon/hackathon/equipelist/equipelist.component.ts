import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/models/team/team';
import { TeamService } from 'src/app/shared/team/team.service';

@Component({
  selector: 'app-equipelist',
  templateUrl: './equipelist.component.html',
  styleUrls: ['./equipelist.component.scss']
})
export class EquipelistComponent implements OnInit {
  @Input() teams: Team[];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {

  }
  delete(id:number){
    this.teamService.delete(id);
  }

}
