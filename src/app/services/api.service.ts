import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  constructor(private http: HttpClient) {}


  getCharacters(characters : number[]) {
    return this.http.get(`${environment.API_URL}/characters/${characters}`)
  }


}
