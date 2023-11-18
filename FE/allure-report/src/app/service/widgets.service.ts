import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API = environment.API_URL;
@Injectable({
    providedIn: 'root'
})
export class WidgetsService {

    httpOptions = {
        headers: new HttpHeaders({
        }),
    }
    constructor(private httpClient: HttpClient) {

    };
    getData(widgets: string): Observable<any> {
        return this.httpClient.get<any>(API + '/allure/' + widgets, this.httpOptions)
    }
}