import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToolModel } from './../../models/tool';

@Injectable()
export class FerramentaService {

    private urlBase: string = 'http://localhost:3000/tools';

    constructor(
        private http: HttpClient
    ) { }

    getTools() {
        return this.http.get(this.urlBase);
    }

    save(tool: ToolModel) {
        return this.http.post(this.urlBase, tool);
    }

    remove(id: number) {
        return this.http.delete(`${this.urlBase}/${id}`);
    }

    searchByTitle(text: string) {
        let params = new HttpParams().set('q', text);
        return this.http.get(this.urlBase, { params });
    }

    searchByTag(text: string) {
        let params = new HttpParams().set('tags_like', text);
        return this.http.get(this.urlBase, { params });
    }
}