import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoModel } from '../models/cursoModel';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private urlEndPoint: string = 'http://localhost:8010/api/courses';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<CursoModel[]> {
    return this.http.get<CursoModel[]>(`${this.urlEndPoint}/all`);
  }

  findById(id?: string): Observable<CursoModel> {
    return this.http.get<CursoModel>(`${this.urlEndPoint}/${id}`);
  }

  save(curso: CursoModel): Observable<any> {
    return this.http.post<any>(`${this.urlEndPoint}/save`, curso);
  }

  delete(id?: string): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/delete/${id}`);
  }

}
