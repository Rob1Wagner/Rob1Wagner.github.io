import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../interface/game';
import { environment } from 'src/environments/environment';
import { Pagination } from '../interface/pagination';

@Injectable({
  providedIn: 'root'
})
export class GameRepository {
  private apiServerUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

    public getGames(): Observable<Game[]> {
      return this.http.get<Game[]>(`${this.apiServerUrl}/game/all`);
    }

    public getPageableGames(): Observable<Pagination> {
      return this.http.get<Pagination>(`${this.apiServerUrl}/game/pageable`);
    }

    public getPageableGamesByPage(page: number): Observable<Pagination> {
      return this.http.get<Pagination>(`${this.apiServerUrl}/game/pageable/${page}`);
    }

    public addGame(game: Partial<Game>): Observable<Game> {
      return this.http.post<Game>(`${this.apiServerUrl}/game/add`, game);
    }

    public updateGame(game: Game): Observable<Game> {
      return this.http.put<Game>(`${this.apiServerUrl}/game/update`, game);
    }

    public deleteGame(gameId: number): Observable<void> {
      return this.http.delete<void>(`${this.apiServerUrl}/game/delete/${gameId}`);
    }
}