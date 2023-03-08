import { Component, OnInit } from '@angular/core';
import {Post} from "../models";
import {ActivatedRoute} from "@angular/router";
import {POSTS} from "../fake-db";
import {AlbumService} from "../post.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  post: Post;
  loaded: boolean;

  constructor(private route: ActivatedRoute,
              private postService: AlbumService) {
    this.post = {} as Post;
    this.loaded = true;
  }

  ngOnInit(): void {


    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.loaded = false;
        this.postService.getPost(id).subscribe((post) => {
          this.post = post;
          this.loaded = true;
        })
      }
    });


  }

}
