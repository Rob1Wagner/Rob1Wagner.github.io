/**
 * Data Informations of a game
 */
export interface Game {
    id: number,
    title: string,
    tags: string[],
    warntags: string[],
    description: string,
    nbLikes: number,
    isAlreadyLiked: boolean,
    gameCode: string;
}
