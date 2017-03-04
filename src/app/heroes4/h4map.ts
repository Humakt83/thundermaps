import { MapSize } from '../shared/mapsize';

export class H4Map {

    public static fromJson(json: any): H4Map {
        return new H4Map(json.name, json.minimaps, json.photos, json.file, MapSize[<string> json.size], json.year, json.description, json.comments);
    }

    constructor(public name: string, public minimaps: string[], public photos: string[], public file: string, public size: MapSize, public year: number, public description: string, public comments: string[]) {}
   
}