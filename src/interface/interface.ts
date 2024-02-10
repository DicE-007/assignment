export interface Person {
    name: string;
    hair_color: string;
    skin_color: string;
    gender: string;
    vehicles: string[];
}

const defaultPerson: Person = {
    name: '',
    hair_color: '',
    skin_color: '',
    gender: '',
    vehicles: [],
};


export interface PeopleResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Person[];
}

export const defaultResponse: PeopleResponse={
    count: 0,
    results: [defaultPerson],
    next: null,
    previous: null
}

export const decodePeopleResponse = (data: any): PeopleResponse => {
    return {
        count: data.count,
        next: data.next,
        previous: data.previous,
        results: data.results.map((person: any) => ({
            name: person.name,
            hair_color: person.hair_color,
            skin_color: person.skin_color,
            gender: person.gender,
            vehicles: person.vehicles,
        }))
    };
}
