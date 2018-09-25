export class Experience {
    name : string;
    company : string;
    startdate : string;
    enddate : string;
    role : string;
    technique : string;
    description : string;

    constructor(
        name : string,
        company : string,
        startdate : string,
        enddate : string,
        role : string,
        technique : string,
        description : string
    )
    {
        this.name = name;
        this.company = company;
        this.startdate = startdate;
        this.enddate = enddate;
        this.role = role;
        this.technique = technique;
        this.description = description;
    }
}