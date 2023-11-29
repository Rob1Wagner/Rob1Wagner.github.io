import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from '../interface/game';
import { ZoomCardComponent } from '../zoom-card/zoom-card.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  // Data informations of the cards
  @Input() game!: Game;

  constructor(public dialog: MatDialog){}

  /**
   * When like's button is clicked, add or substray the like depending of this state and toggle this state
   */
  toggleLikes(){
    this.game.isAlreadyLiked ? this.game.nbLikes-- : this.game.nbLikes++ ;  
    this.game.isAlreadyLiked = !this.game.isAlreadyLiked;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ZoomCardComponent, {
      height: '600px',
      width: '1500rem',
      data: {game: this.game}
    });
  }
}
