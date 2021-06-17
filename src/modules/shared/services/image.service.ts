import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  constructor(private http: HttpClient) {}
  getImages(): Observable<any> {
    return this.http.get<any>('assets/meme-background');
  }
}
