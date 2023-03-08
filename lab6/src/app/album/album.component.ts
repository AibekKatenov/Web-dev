import { Component, OnInit } from '@angular/core';
import {Post} from "../models";
import {POSTS} from "../fake-db";
import {AlbumService} from "../post.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  posts: Post[];
  constructor(private postService: AlbumService) {
    this.posts = [];
    // console.log('constructor');
  }

  ngOnInit(): void {
    // console.log('ngOnInit');
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

}

