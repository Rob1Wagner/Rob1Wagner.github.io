import { Injectable } from '@angular/core';
import { Game } from '../interface/game';
import { GameRepository } from '../repository/game.repository';
import { HttpErrorResponse } from '@angular/common/http';
import { Pagination } from '../interface/pagination';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public games!: Game[];
  public elemsPages! : Pagination;

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

  public getPageableGames(): void {
    this.gameRepository.getPageableGames().subscribe(
      (response: Pagination) => {
        this.games = response.games;
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  public changePageGames(page: number): void {
    this.gameRepository.getPageableGamesByPage(page).subscribe(
      (response: Pagination) => {
        this.elemsPages = response;
        this.games = response.games;
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }
}
