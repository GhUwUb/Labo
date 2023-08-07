import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TournoisService } from 'src/app/services/tournois/tournois.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  tournamentForm !: FormGroup;

  constructor(private _fb : FormBuilder, private _tournamentService : TournoisService){
    this.tournamentForm = this._fb.group({

    })
  }
}
