import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlEndPoint: string = 'http://localhost:8000/api/users';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>(`${this.urlEndPoint}/all`);
  }

  findById(id?: string): Observable<UsersModel> {
    return this.http.get<UsersModel>(`${this.urlEndPoint}/${id}`);
  }

  save(user: UsersModel): Observable<any> {
    return this.http.post<any>(`${this.urlEndPoint}/save`, user);
  }

  delete(id?: string): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/delete/${id}`);
  }
}
  

