export enum MapSize {

    XL, S, M, L
    
}

export namespace MapSize {

    export function getImage(mapSize: MapSize) {
        return 'assets/images/' + MapSize[mapSize] + '.jpg';
    }

}