import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
	public article;
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
  			this.articleservice.redirect('/articles');

  	}
  	findArticle(id)
  	{
  		this.articleservice.showArticleById(id)
  		.subscribe(
  			data => {this.article = JSON.stringify(data);console.log(data);},
  			err => {console.error(err)},
  			() => {console.log('Article loaded successfully');}
  			);
  	}
}
