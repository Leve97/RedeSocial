import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { APICONFIG } from "../config/api.config";
import { Posts } from "../model/posts";

@Injectable()
export class PostService{
    constructor(private http : HttpClient){
        }

        getPosts() : Observable<Posts[]>{
            
            return this.http.get<Posts[]>(`${APICONFIG.url}/posts`);
        }
}