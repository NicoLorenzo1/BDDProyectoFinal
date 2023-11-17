import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

    private url = 'http://localhost:4000/api/questions/';

    constructor(private http: HttpClient) { }

    getQuestions(): Observable<any> {
        console.log('entramo');
        return this.http.get(this.url);
    }

    deleteQuestion(id: string): Observable<any> {
        return this.http.delete(this.url + id);
    }

    saveQuestion(question: Register): Observable<any> {
        return this.http.post(this.url, question);
    }

    getQuestion(id: string): Observable<any> {
        return this.http.get(this.url + id);
    }

    updateQuestion(id: string, question: Register): Observable<any> {
        return this.http.put(this.url + id, question);
    }
}