import { Component, Input} from '@angular/core';
import { Game } from '../interface/game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  // Data informations of the cards
  @Input() game!: Game;

  public CardComponent(){}

  /**
   * When like's button is clicked, add or substray the like depending of this state and toggle this state
   */
  toggleLikes(){
    this.game.isAlreadyLiked ? this.game.nbLikes-- : this.game.nbLikes++ ;  
    this.game.isAlreadyLiked = !this.game.isAlreadyLiked;
  }

}
