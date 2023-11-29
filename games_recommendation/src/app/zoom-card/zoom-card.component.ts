import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from '../interface/game';

@Component({
  selector: 'app-zoom-card',
  templateUrl: './zoom-card.component.html',
  styleUrls: ['./zoom-card.component.scss'],
})

export class ZoomCardComponent {
  public game: Game = this.data.game;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}  
}
