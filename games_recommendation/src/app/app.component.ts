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
      this.gameService.changePageGames(0);
  }

  /**
   * Getter of games
   */
  public get elemsPage(){
    return this.gameService.elemsPages;
  }

  public changePage(page: number){
    if(page !== this.elemsPage.currentPage && page >= 0 && page < this.elemsPage.totalPages) this.gameService.changePageGames(page);
  }
}
