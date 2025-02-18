import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-octoprint-c',
  templateUrl: './octoprint-c.component.html',
  styleUrl: './octoprint-c.component.css'
})
export class OctoprintCComponent implements OnInit{
  printTime: number =1;
  filamentUsed: number = 2.9;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://octopi.local/api/job')
      .subscribe(data => {
        this.printTime = 1;
        this.filamentUsed = 10;
      });
  }
}
