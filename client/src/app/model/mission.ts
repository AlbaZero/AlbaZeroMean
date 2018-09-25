export class Mission {
    company : string;
    startdate : string;
    enddate : string;
    role : string;
    techniques : string[];
    description : string;

    constructor(){
        this.company = "";
        this.startdate = "";
        this.enddate = "";
        this.role ="";
        this.techniques = new Array<string>();
        this.description = "";
    }
}