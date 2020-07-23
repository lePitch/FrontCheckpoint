import { Component, OnInit } from '@angular/core';
import { Hackathon } from 'src/app/models/hackathon/hackathon';
import { HackathonService } from 'src/app/shared/hackathon/hackathon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createhackathon',
  templateUrl: './createhackathon.component.html',
  styleUrls: ['./createhackathon.component.scss']
})
export class CreatehackathonComponent implements OnInit {

  constructor(private hackathonService: HackathonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  parentReception(hackathon: Hackathon){
    this.hackathonService.newHackathon(hackathon);
  }


}
