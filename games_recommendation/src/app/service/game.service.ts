import { Injectable } from '@angular/core';
import { Game } from '../interface/game';
import { GameRepository } from '../repository/game.repository';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public games!: Game[];

  constructor(private gameRepository: GameRepository){}
  
  public getGames(): void {
    this.gameRepository.getGames().subscribe(
      (response: Game[]) => {
        this.games = response;
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }
}
