import { Component } from '@angular/core';
import { AbstractControl, FormArray,FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      name : [ null, [Validators.required, Validators.minLength(1)]],
      location : [null, [Validators.required]],
      minPlayers : [null, [Validators.required]],
      maxPlayers : [null, [Validators.required, Validators.max(3000), Validators.min(0)]],
      eloMin : [null, [Validators.required]],
      eloMax : [null, [Validators.required]],
      categories : this._fb.array([
        this._fb.control(null),
        this._fb.control(null),
        this._fb.control(null)
      ]),
      endOfRegistrationDate : [null, [Validators.required,]],
      womenOnly : ['false', [Validators.required,]]
    })
  }

  addTournament() {
    if (this.tournamentForm.valid) {
      const selectedCategories = this.getSelectedCategories();

      if (selectedCategories.length > 0) {
        this.tournamentForm.patchValue({ categories: selectedCategories });

        console.log(this.tournamentForm.value);
        this._tournamentService.postTournament(this.tournamentForm.value).subscribe();
      } else {
        console.log("Aucune catégorie sélectionnée.");
      }
    } else {
      console.log("Tournoi non valide");
    }
  }

  getSelectedCategories(): string[] {
    return this.tournamentForm.controls['categories'].value
      .map((selected: boolean, index: number) => (selected ? this.getCategoryByIndex(index) : null))
      .filter((category: string | null) => category !== null) as string[];
  }

  // Fonction pour obtenir la catégorie par index
  getCategoryByIndex(index: number): string {
    switch (index) {
      case 0:
        return "Junior";
      case 1:
        return "Senior";
      case 2:
        return "Veteran";
      default:
        return "";
    }
  }

  isCategorySelected(index: number): boolean {
    const selectedCategories = this.tournamentForm.value.categories;
    return selectedCategories[index] === true;
  }
}
