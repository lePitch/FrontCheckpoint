import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hackathon } from 'src/app/models/hackathon/hackathon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hackathonform',
  templateUrl: './hackathonform.component.html',
  styleUrls: ['./hackathonform.component.scss']
})
export class HackathonformComponent implements OnInit {

  @Output() hackathonCreated = new EventEmitter<Hackathon>();

  hackathon: Hackathon = new Hackathon();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['']);
    this.hackathonCreated.emit(this.hackathon);
  }

}
