import { Component, OnInit } from '@angular/core';
import { HackathonService } from 'src/app/shared/hackathon/hackathon.service';
import { Hackathon } from 'src/app/models/hackathon/hackathon';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  hackathons: Hackathon[];

  constructor(private service: HackathonService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe( data => {this.hackathons = data; console.log(this.hackathons)}); }

}
