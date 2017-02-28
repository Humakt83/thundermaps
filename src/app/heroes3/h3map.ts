export class H3Map {

    public static fromJson(json: any): H3Map {
        return new H3Map(json.name, json.minimaps, json.photos, json.file, MapSize[<string> json.size], json.year);
    }

    constructor(public name: string, public minimaps: string[], public photos: string[], public file: string, public size: MapSize, public year: number) {}
   
}

export enum MapSize {

    XL, S, M, L
    
}