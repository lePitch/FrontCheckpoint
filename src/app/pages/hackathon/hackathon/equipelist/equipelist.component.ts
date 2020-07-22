import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/models/team/team';

@Component({
  selector: 'app-equipelist',
  templateUrl: './equipelist.component.html',
  styleUrls: ['./equipelist.component.scss']
})
export class EquipelistComponent implements OnInit {
  @Input() teams: Team[];

  constructor() { }

  ngOnInit(): void {
  }

}
