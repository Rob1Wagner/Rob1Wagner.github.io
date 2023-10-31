import { Component } from '@angular/core';
import { Game } from './interface/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Mock données des cartes
  games: Game[]= [
    { id: 1, title: "Unlock", tags: ["Jeu Collaboratif"], warntags: ["Application Mobile"], description: "Unlock est une sorte de jeu escape-game. Le but étant de s’échapper ou de résoudre le plus rapidement un scénario ...", nbLikes: 5, isAlreadyLiked : false},
    { id: 2, title: "Perudo", tags: ["Jeu de Bluff"], warntags: [""], description: "Le Perudo est une sorte de jeu de poker-menteur qui se joue avec des dés. Une particularité cependant ...", nbLikes: 3, isAlreadyLiked : false},
    { id: 3, title: "Les aventuriers du rails", tags: ["Jeu Stratégique"], warntags: [""], description: "Voyager avec ses amis tout en restant chez soi, c’est possible. Avec les aventuriers du rail, placez vos rails ...", nbLikes: 3, isAlreadyLiked : false},
    { id: 4, title: "Loup-Garou de Thiercellieux", tags: ["Jeu d’Ambiance", "Jeu Nombreux", "Jeu de Bluff"], warntags: [""], description: "Le Loup-Garou de Thiercellieux est surement l’un des jeux les plus connus en France. Vous possédez ... ", nbLikes: 3, isAlreadyLiked : false},
    { id: 5, title: "Escape to the Dark Castle", tags: ["Jeu Collaboratif"], warntags: [""], description: "Prenez la rôle d’un personnage et échappez vous d’un donjon en équipe en fonction des scénarios que vous rencontrerez ...", nbLikes: 2, isAlreadyLiked : false},
    { id: 6, title: "The Mind", tags: ["Jeu Collaboratif", "Jeu de carte"], warntags: [""], description: "Placez vos cartes dans l’ordre croissant des numéros posées sans aucune communication  ...", nbLikes: 2, isAlreadyLiked : false},
    { id: 7, title: "Exploding kittens", tags: ["Jeu d’Ambiance", "Jeu de carte"], warntags: [""], description: "Votre seul but est d’espérer de ne pas piocher de carte bombe à la fin de votre tour.  Pour cela, les cartes que ...", nbLikes: 2, isAlreadyLiked : false},
    { id: 8, title: "Room-25", tags: ["Jeu Collaboratif", "Jeu de Bluff"], warntags: [""], description: "Echappez-vous le plus rapidement possible de la room-25, un complexe rempli de salles piégées. Mais attention ...", nbLikes: 1, isAlreadyLiked : false},
  ]
}
