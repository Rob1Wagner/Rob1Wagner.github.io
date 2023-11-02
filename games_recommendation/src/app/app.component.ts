import { Component, OnInit } from '@angular/core';
import { Game } from './interface/game';
import { GameService } from './game.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Mock données des cartes
  public games: Game[] | undefined;

  constructor(private gameService: GameService){}

  ngOnInit(): void {
      this.getGames();
  }

  public getGames(): void {
    this.gameService.getGames().subscribe(
      (response: Game[]) => {
        this.games = response;
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }
  
}
