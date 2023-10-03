import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorCountService {
  
  private visitorCount!: number;

  private countUrl: string = 'placeholder url';

  constructor(private http: HttpClient) { }

  fetchVisitorCount(): Observable<number> {
    return this.http.get<number>(this.countUrl)
  }

  // private setVisitorCount() {
  //   fetchedCount: Observable<number> = this.fetchVisitorCount()
  // }

  getVisitorCount() {
    return this.visitorCount;
  }
}
