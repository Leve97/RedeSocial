import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostService } from '../../services/posts.service';
import { Posts } from '../../model/posts';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {
  public posts : Posts[] = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public postService : PostService
    ) {
      
    this.postService.getPosts().subscribe(response =>{console.log(response);this.posts = response;})
  }

}
