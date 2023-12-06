import { Component } from '@angular/core';
import { GameService } from './service/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private gameService: GameService){}


}
