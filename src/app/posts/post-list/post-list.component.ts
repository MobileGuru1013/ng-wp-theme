import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../shared/wp-services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostsService]
})

export class PostListComponent implements OnInit {
  posts: any[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    const params = {
      _embed: '',
      per_page: 5
    };

    this.postsService
      .getList(params)
      .subscribe((posts: any[]) => {
        this.posts = posts;
      });
  }
}
