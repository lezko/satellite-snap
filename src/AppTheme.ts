export interface AppTheme {
    color: {
        bg: string;
        bgElevated: string;
        text: string;
        textDisabled: string;
        hover: string;
        ship: string;
        hitCross: string;
        markedCell: string;
        sunkCross: string;
        boardBorder: string;
        currentPlayerBoardBorder: string;
        defaultDot: string;
    },
    transition: number;
}

export const theme: AppTheme = {
    color: {
        bg: '#0c1119',
        bgElevated: '#1c2041',
        text: '#706ba1',
        textDisabled: '#5e5e5e',
        hover: '#a8a8e1',
        ship: '#292929',
        hitCross: '#d2d24e',
        markedCell: '#6c5656',
        boardBorder: 'gray',
        currentPlayerBoardBorder: '#d2d24e',
        sunkCross: '#d55b5b',
        defaultDot: '#657a45'
    },
    transition: .3
}
