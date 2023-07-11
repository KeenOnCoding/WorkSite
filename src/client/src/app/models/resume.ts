export class Resume {
    id: any;
    firstName: any;
    lastName: any;
    birthday: any;
    jobTitle: any;
    workplaces: Workplace[];
    education: Education[];
}
export class Workplace {
    id: string;
    position: any;
    companyName: any;
    industry: any;
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
    desctiption: any;
    responsabilities: any;
}
export class Education {
    id: string;
    companyName: any;
    spesialization: any;
    degree: any;
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
}
export class Header {

}