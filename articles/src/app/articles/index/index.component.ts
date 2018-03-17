import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private articleservice: ArticleService) { }
  public articles;
  public keys;
  ngOnInit() {
  	this.allArticles();
  }
  	allArticles()
  	{
  		this.articleservice.showAllArticles()
  		.subscribe(

  			data => {
          this.articles = data;
          this.keys = Object.keys(data);
        },
  			err => {console.error(err)},
  			() => {console.log('Articles loaded successfully');}
  			);
  	}

    deleteArticle(id)
    {
      this.articleservice.deleteArticle(id)
      .subscribe(
          err => {console.error(err)},
          data => {
          	console.log('Article deleted successfully');
          	this.articleservice.redirect('/articles',null);
          }
        );
    }
}
