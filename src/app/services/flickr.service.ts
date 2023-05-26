import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Photo} from "../models/photo";

export interface FlickrAPIResponse {
  photos: {
    photo: Photo[];
  };
}
@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  constructor(private http: HttpClient) { }

  public search(searchTerm: string): Observable<Photo[]> {
    return this.http
      .get<FlickrAPIResponse>('https://www.flickr.com/services/rest/', {
        params: {
          tags: searchTerm,
          method: 'flickr.photos.search',
          format: 'json',
          nojsoncallback: '1',
          tag_mode: 'all',
          media: 'photos',
          per_page: '15',
          extras: 'tags,date_taken,owner_name,url_q,url_m',
          api_key: '543a7c785b0dc743a7d60510f118f6d3'
        },
      })
      .pipe(map((response) => response.photos.photo));
  }
}
