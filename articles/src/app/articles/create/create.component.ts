import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { ShowComponent } from '../show/show.component';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public article;
  public article_title;
  public article_description;
  public article_image;
  public img_path = "./src/public/img/no.png";
	title = 'Add new Article';
  constructor(private articleservice: ArticleService) { }

  ngOnInit() {
  }
  createArticle()
  {
    let article = {
      "title": this.article_title,
      "description": this.article_description,
      //"image": this.article_image
    };
    this.articleservice.createArticle(article)
    .subscribe(
        data => {
          console.log('created! %s',JSON.stringify(data));
          this.goArtilce(data);
        },
        err => {
          return Observable.throw(err);
        }
      );
  }
  perview_image(event)
  {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.img_path = event.target.result;
      }
    }
  }
  goArtilce(data)
  {
    this.articleservice.redirectWith('/article/show',data.article._id);
  }
}
