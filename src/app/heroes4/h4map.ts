import { HeroesMap } from '../map/map';

export type H4Map = HeroesMap & { 
    description: string; 
    comments: string[];
};
