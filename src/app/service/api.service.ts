import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string="https://dummyjson.com/users"


  constructor(private http:HttpClient) { }
  viewDetail(){
   return this.http.get(`${this.baseUrl}`)
  }
}
