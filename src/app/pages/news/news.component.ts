import { Component, OnInit, OnChanges } from '@angular/core';

import { NewsService } from './../../globals/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnChanges {

  title: string = "Noticias";

  news: any[] = [];

  sources: any[] = [];
  source: string = '';
  search: string = '';

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.getSources();
  }

  ngOnChanges() { }

  doSearch() {
    this.newsService.getNews(this.search, this.source).then(data => {
      this.news = data;
    }).catch(err => {
      console.log(err);
    });
  }

  validateEnter(e) {
    console.log('event:', e.key);
    if (e.key === 'Enter') {
      this.doSearch();
    }
  }

  getSources() {
    this.newsService.getSources().then(data => {
      this.sources = data;
    }).catch(err => {
      console.error(err);
    });
  }
}
