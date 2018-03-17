import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
	public articles;
  constructor(private articleservice: ArticleService,private route: ActivatedRoute) { }

  ngOnInit() {
  	this.viewArticle();
  }
  	viewArticle ()
  	{
  		let id = this.route.snapshot.params.id;
  		if(id)
  			this.findArticle(id)
  		else
  			this.articleservice.redirect(['/']);

  	}
  	findArticle(id)
  	{
      console.log(id);
  		this.articleservice.showArticleById(id)
  		.subscribe(
  			data => {this.articles = data;console.log(JSON.stringify(data));},
  			err => {console.error(err)},
  			() => {console.log('Articles loaded successfully');}
  			);
  	}
}
