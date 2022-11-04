import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(params: any) : Observable<any> {
    const URL = `https://newsapi.org/v2/top-headlines?country=${params.pais}&category=${params.categoria}&apiKey=e1f09f2f645f406e8ed35e187fd2d1f3`
    return this.http.get(URL);
  }
}
