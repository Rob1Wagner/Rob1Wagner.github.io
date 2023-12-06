import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  constructor(private route: ActivatedRoute, private gameService: GameService){}

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
    this.route.params.subscribe(params => {
      const idPage = params['idPage'];
    });
    if(page !== this.elemsPage.currentPage && page >= 0 && page < this.elemsPage.totalPages) this.gameService.changePageGames(page);
  }
 }
