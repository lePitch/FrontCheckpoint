import { Component, OnInit } from '@angular/core';
import { HackathonService } from 'src/app/shared/hackathon/hackathon.service';
import { Hackathon } from 'src/app/models/hackathon/hackathon';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/shared/team/team.service';
import { Team } from 'src/app/models/team/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  hackathon: Hackathon;

  constructor(private teamService: TeamService, private hackathonService: HackathonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.hackathonService.getHackathonById(+params.get('id')).subscribe(
        data => this.hackathon= data); } );
  }
  parentReception(team: Team){
    this.teamService.newTeam(team);
  }
}
