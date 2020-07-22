import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/team/team';
import { TeamService } from 'src/app/shared/team/team.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {

  team: Team = new Team();

  constructor(private service: TeamService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
    this.service.getTeamById(+params.get('id')).subscribe(
      data => {this.team = data; console.log(this.team); }); } );
  }

}
