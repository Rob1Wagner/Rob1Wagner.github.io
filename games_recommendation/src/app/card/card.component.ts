import { Component, Input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class CardComponent {

  // Décorateurs Inputs
  
  @Input() title!: string;
  @Input() tags!: string[];
  @Input() warntags!: string[];
  @Input() description!: string;
}
