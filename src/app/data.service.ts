import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://api.giphy.com/v1/gifs/search?q=Tyler+Peterson&api_key=OPTMecadTN4pAAq4hlYQCyaQC49SUccv&limit=30');
  }
}
