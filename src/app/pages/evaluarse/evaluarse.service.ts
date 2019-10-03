import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Preguntas } from 'src/app/models/preguntas';
import { Secciones } from 'src/app/models/secciones';


@Injectable({
  providedIn: 'root'
})
export class EvaluarseService {

  api = 'http://localhost:8039/administrativa';
  private httpHeaders = new HttpHeaders({ 'Content-type' : 'application/json' });

  constructor(private http: HttpClient) { }


  getPreguntas(id: number): Observable<Preguntas[]> {
    return this.http.get<Preguntas[]>(this.api + '/mostrarPregug/' + id);
  }

  getSecciones(): Observable<Secciones []> {
    return this.http.get<Secciones[]>(this.api + '/muestraSeccio');
  }

}
