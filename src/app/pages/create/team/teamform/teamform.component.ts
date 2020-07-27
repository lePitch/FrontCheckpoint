import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Team } from 'src/app/models/team/team';
import { ActivatedRoute, Router } from '@angular/router';
import { Hackathon } from 'src/app/models/hackathon/hackathon';

@Component({
  selector: 'app-teamform',
  templateUrl: './teamform.component.html',
  styleUrls: ['./teamform.component.scss']
})
export class TeamformComponent implements OnInit {
  @Output() teamCreated = new EventEmitter<Team>();

  team: Team = new Team();

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['']);
    this.route.params.subscribe(params => {
      this.team.hackathon = new Hackathon();
      this.team.hackathon.id = +params.id; });
    this.teamCreated.emit(this.team);
  }
}
