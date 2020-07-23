import { Component, OnInit, Input } from '@angular/core';
import { Hackathon } from 'src/app/models/hackathon/hackathon';
import { ActivatedRoute } from '@angular/router';
import { HackathonService } from 'src/app/shared/hackathon/hackathon.service';

@Component({
  selector: 'app-hackathonlist',
  templateUrl: './hackathonlist.component.html',
  styleUrls: ['./hackathonlist.component.scss']
})
export class HackathonlistComponent implements OnInit {

  @Input() hackathons: Hackathon[];

  constructor(private hackathonService: HackathonService) { }

  ngOnInit(): void {
  }
  delete(id){
    this.hackathonService.deleteHackathon(id);
  }
}
