import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Member } from 'src/app/models/member/member';
import { MemberService } from 'src/app/shared/member/member.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Output() memberCreated = new EventEmitter<Member>();
  @Input() member: Member;
  show: boolean = false;
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
  }
  edit(){return this.show = !this.show;}

  parentReception(member: Member){
    this.memberService.newMember(member);
}
}
