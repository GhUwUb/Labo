import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberService } from 'src/app/services/member/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {

  memberForm : FormGroup;

  constructor(private _memberService : MemberService, private _fb : FormBuilder){

    this.memberForm = this._fb.group({
      username : [ null, [Validators.required, Validators.minLength(1)]],
      email : [null, [Validators.required, Validators.email]],
      birthDate : [null, [Validators.required]],
      elo : [null, [Validators.required, Validators.max(3000), Validators.min(0)]],
      gender : [null, [Validators.required,]]
    })
  }


  addMember(){
    if(this.memberForm.valid){
      console.log(this.memberForm.value);
      this._memberService.postMember(this.memberForm.value);
    }else{
      console.log("Membre pas valide");

    }
  }
}
