import { Component, OnInit } from '@angular/core';
import { Hackathon } from 'src/app/models/hackathon/hackathon';
import { HackathonService } from 'src/app/shared/hackathon/hackathon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.component.html',
  styleUrls: ['./hackathon.component.scss']
})
export class HackathonComponent implements OnInit {

  hackathon: Hackathon;

  constructor(private service: HackathonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
    this.service.getHackathonById(+params.get('id')).subscribe(
      data => {this.hackathon = data;}); } );
  }
}
