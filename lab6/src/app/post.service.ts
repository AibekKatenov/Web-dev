import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private client: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.client.get<Post[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getPost(id: number): Observable<Post>{
    return this.client.get<Post>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
  
  
}
