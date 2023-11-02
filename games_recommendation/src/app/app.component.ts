import { Component, OnInit } from '@angular/core';
import { GameService } from './service/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private gameService: GameService){}

  ngOnInit(): void {
      this.gameService.getGames();
  }

  /**
   * Getter of games
   */
  public get games(){
    return this.gameService.games;
  }
}
