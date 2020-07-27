import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Member } from 'src/app/models/member/member';
import { MemberService } from 'src/app/shared/member/member.service';
import { Team } from 'src/app/models/team/team';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Output() memberCreated = new EventEmitter<Member>();
  @Input() member: Member;
  team: Team = new Team();
  show: boolean = false;
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
  }
  edit(){return this.show = !this.show;}

  parentReception(member: Member){
    this.memberService.newMember(member);
  }
  delete(){
    this.memberService.delete(this.member.id);
  }
}
