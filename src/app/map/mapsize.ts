export enum MapSize {

    S, M, L, XL
    
}

export namespace MapSize {

    export function getImage(mapSize: MapSize) {
        return 'assets/images/' + mapSize + '.jpg';
    }

}