import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  visitorCount!: number;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getVisitorCount();
  }

  getVisitorCount() {
    this.http
      .get<number>(
        'https://72yrg7d234xjeza7xymuprl4je0kjpun.lambda-url.us-east-1.on.aws/'
      )
      .subscribe((response) => {
        this.visitorCount = response;
      });
  }
}
