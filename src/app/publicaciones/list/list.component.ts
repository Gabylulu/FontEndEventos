import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    publicacion: any;
    date: Date;
    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.buscarPublicacion();

    }

    buscarPublicacion() {
        return new Promise(resolve => {
        });
    }


}
