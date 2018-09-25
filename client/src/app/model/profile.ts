import { Mission } from './mission';

export class Profile {
    id : string;
    name : string;
    keywords : string[];
    description : string;
    competencies : string[];
    educations : string[];
    languages : string[];
    programmingLanguages : string[];
    databases : string[];
    techniques : string[];
    missions : Mission[];

    constructor(){
        this.id = "";
        this.name = "";
        this.keywords = new Array<string>();
        this.description = "";
        this.competencies = new Array<string>();
        this.educations = new Array<string>();
        this.languages = new Array<string>();
        this.programmingLanguages = new Array<string>();
        this.databases = new Array<string>();
        this.techniques = new Array<string>();
        this.missions = new Array<Mission>();
    }
}