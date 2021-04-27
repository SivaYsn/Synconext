export class Users {
    'id': number;
    'building': string;
    'city': string;
    'state': string;
    'lat': number;
    'long': number;
    'phon': number;
    'email': string;
    constructor(id: number, building: string, city: string, state: string, lat: number, long: number, phon: number, email: string){
        this.id = id;
        this.building = building;
        this.city = city;
        this.state = state;
        this.lat = lat;
        this.long = long;
        this.phon = phon;
        this.email = email;
    }
}
