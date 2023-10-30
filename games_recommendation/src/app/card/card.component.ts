import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Game } from '../interface/game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
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
