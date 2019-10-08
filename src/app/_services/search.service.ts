import { Injectable } from '@angular/core';
import {Search} from '../_models/search';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Training } from '../_models/training';
import { Observable } from 'rxjs';
import { TechnologyListComponent } from '../technology-list/technology-list.component';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
private  geturl:string;
private _name:string;
private _start:string;
private _end:string;
  constructor(private http: HttpClient) {
    this.geturl='http://localhost:8083/search';}
   public getDetails():Observable<Training[]> {
    return this.http.get<Training[]>(this.geturl+"/"+this._name+"/"+this._start+"/"+this._end);
    
   }
public passdata(name,start,end){
 this._name=name;
 this._start=start;
 this._end=end;
}
}
