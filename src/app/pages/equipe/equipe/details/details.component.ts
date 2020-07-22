import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/models/member/member';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() member: Member;
  show: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  edit(){return this.show = !this.show;}

}
