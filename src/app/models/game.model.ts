export enum PlayerColor {
    BLACK = '#0D1321',
    OFFWHITE = '#F0EBD8',
    GREEN = '#136F63',
    SKYBLUE = '#C6D8FF',
    BLUE = '#192BC2',
    PURPLE = '#7353BA',
    ORANGE = '#F95738',
    YELLOW = '#F4D35E',
}

export type RoomCode = string | null;

export interface Game {
    playerColor: PlayerColor;
    roomCode: RoomCode;
}