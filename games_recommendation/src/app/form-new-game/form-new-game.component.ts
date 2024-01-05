import { Component } from '@angular/core';
import { FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { GameService } from '../service/game.service';
import { Game } from '../interface/game';

@Component({
  selector: 'app-form-new-game',
  templateUrl: './form-new-game.component.html',
  styleUrls: ['./form-new-game.component.scss'],
})

export class FormNewGameComponent {

  constructor(private fb: FormBuilder, private gameService: GameService){}

  gameForm = this.fb.group({
    title : new FormControl('', [Validators.required, Validators.maxLength(15)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(400)]),
    tags: this.fb.array<string[]>([]),
    warntags: this.fb.array<string[]>([]),
  })
  
  
  get tags(){
    return this.gameForm.controls["tags"] as FormArray;
  }

  get warntags(){
    return this.gameForm.controls["warntags"] as FormArray;
  }

  addNewTag(tag: string){
    if(this.tags.value.includes(tag)) {
      let index: number = this.tags.value.findIndex((value: string) => value === tag);
      this.tags.removeAt(index);
    }
    else this.tags.push(new FormControl(tag));
  }

  addNewWarntag(warntag: string){
    this.warntags.push(new FormControl(warntag));
  }

  notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
    return value !== null && value !== undefined;
  }

  onSubmit() {
    let gameValue: Partial<Game> = {
      title: this.gameForm.value.title!,
      description: this.gameForm.value.description!,
      tags: this.gameForm.value.tags!.filter(this.notEmpty),
      warntags: this.gameForm.value.warntags!.filter(this.notEmpty),
      nbLikes: 0,
      isAlreadyLiked: false,
    } 
    this.gameService.addGame(gameValue);
  }
}
