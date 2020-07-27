import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/models/team/team';
import { TeamService } from 'src/app/shared/team/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipelist',
  templateUrl: './equipelist.component.html',
  styleUrls: ['./equipelist.component.scss']
})
export class EquipelistComponent implements OnInit {
  @Input() team: Team;

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit(): void {

  }
  delete(){
    this.router.navigate(['']);
    this.teamService.delete(this.team.id);
  }

}
