import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordModel } from '../models/recordModel';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private urlEndPoint: string = 'http://localhost:8030/api/records';

  constructor(private http:HttpClient) { }

  public findAll(): Observable<RecordModel[]> {
    return this.http.get<RecordModel[]>(`${this.urlEndPoint}/all`);
  }

  findById(id?: string): Observable<RecordModel> {
    return this.http.get<RecordModel>(`${this.urlEndPoint}/${id}`);
  }

  save(record: RecordModel): Observable<any> {
    return this.http.post<any>(`${this.urlEndPoint}/save`, record);
  }

  delete(id?: string): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/delete/${id}`);
  }

  update(record: RecordModel): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/update/${record.id}`, record);
  }
}
