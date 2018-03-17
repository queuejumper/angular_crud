import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Router} from "@angular/router";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
@Injectable()
export class ArticleService {
  constructor(
  	private	http:HttpClient,
    private router: Router
  	) { }

  createArticle(article)
  {
  	const url = 'http://localhost:3000/article/create';
  	return this.http.post(url,article);
  }
  showAllArticles()
  {
    const url = 'http://localhost:3000/article/show';
    return this.http.get(url);
  }
  deleteArticle(id)
  {
    const url = 'http://localhost:3000/article/delete/';
    return this.http.delete(url+id);
  }
  showArticleById(id)
  {
    const url = 'http://localhost:3000/article/show/';
    return this.http.get(url+id);
  }
  updateArticle(article)
  {
    const url = 'http://localhost:3000/article/update';
    return this.http.put(url+article.id,article);
  }

  redirect(to,param)
  {
    this.router.navigate([to,param]);
  }
}
