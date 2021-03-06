import { Component, OnInit } from '@angular/core';

import { NewsService } from './../../globals/services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {

  title: string = "Titulares"

  headlines: any[] = [];
  country: string = 'mx';

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getHeadlines();
  }

  getHeadlines(country?) {
    this.newsService.getHeadlines(country).then(data => {
      this.headlines = data;
    }).catch(err => {
      console.error(err);
    })
  }

  onCountryChange() {
    this.getHeadlines(this.country);
  }

}
