import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hackathon } from 'src/app/models/hackathon/hackathon';

@Component({
  selector: 'app-hackathonform',
  templateUrl: './hackathonform.component.html',
  styleUrls: ['./hackathonform.component.scss']
})
export class HackathonformComponent implements OnInit {

  @Output() hackathonCreated = new EventEmitter<Hackathon>();

  hackathon: Hackathon = new Hackathon();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.hackathonCreated.emit(this.hackathon);
  }

}
