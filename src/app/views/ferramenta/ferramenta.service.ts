import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FerramentaService {

    private urlBase: string = 'http://localhost:3000/tools';

    constructor(
        private http: HttpClient
    ) { }

    getTools() {
        return this.http.get(this.urlBase);
    }
}