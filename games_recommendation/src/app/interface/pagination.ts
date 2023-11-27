import { Game } from './game';

export interface Pagination {
    totalItems: number,
    games: Game[],
    currentPage: number,
    totalPages: number  
 }
