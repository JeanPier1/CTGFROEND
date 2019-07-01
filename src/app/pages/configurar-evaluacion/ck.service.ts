import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instrumentos } from 'src/app/models/instrumento';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CkService {

  api = 'http://localhost:8039/administrativa';
  private httpHeaders = new HttpHeaders({ 'Content-type' : 'application/json' });


  constructor(private http: HttpClient) { }

 /* crearconfiguracion(): Observable<Instrumentos> {
    // tslint:disable-next-line:prefer-const
    let data = {

    };
    return;
  }*/

  getinstrumento(id: string): Observable<Instrumentos> {
    return this.http.get<Instrumentos>(this.api + '/mostarInstrumento/' + id);
  }

  actualizarInstrumento(id: string, instrumentp: Instrumentos): Observable<Instrumentos> {
    console.log(instrumentp);
    return this.http.post<Instrumentos>(this.api + '/update/' + id, instrumentp, { headers: this.httpHeaders });
  }
}

