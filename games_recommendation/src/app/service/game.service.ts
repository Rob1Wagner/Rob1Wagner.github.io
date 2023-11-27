import { Injectable } from '@angular/core';
import { Game } from '../interface/game';
import { GameRepository } from '../repository/game.repository';
import { HttpErrorResponse } from '@angular/common/http';
import { Pagination } from '../interface/pagination';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public elemsPages : Pagination = {
    totalItems: 0,
    games: [],
    currentPage: 0,
    totalPages: 0
  }

  constructor(private gameRepository: GameRepository){}
  
  public getGames(): void {
    this.gameRepository.getGames().subscribe(
      (response: Game[]) => {
        this.elemsPages.games = response;
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

  public getPageableGames(): void {
    this.gameRepository.getPageableGames().subscribe(
      (response: Pagination) => {
        this.elemsPages = response;
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
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }
}
