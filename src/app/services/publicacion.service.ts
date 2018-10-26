
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const  API_URL = 'http://localhost:8080/sisEventosWs/getDestinos/';
 @Injectable()

export class PublicacionService {
     apiUrl: string;
    constructor(private http: Http) { }
getDestinos (id): Observable<any> {
    const idParam = id;
    const type = 'W2';
    return this.http.get(API_URL + idParam + '/' + Type)
    .map((res: Response) => res.json());
}
    buscarPublicacion(param) {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + 'getTodasPublicaciones' + param)
                .map((res: Response) => res.json());
        });
    }
}
