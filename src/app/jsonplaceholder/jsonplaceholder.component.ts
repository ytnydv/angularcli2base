import { Component, OnInit } from '@angular/core';
import { PostService } from './service.service';
import { Post } from './jsonplaceholder.model';

@Component({
  selector: 'app-jsonplaceholder',
  templateUrl: './jsonplaceholder.component.html',
  styleUrls: ['./jsonplaceholder.component.css']
})
export class JsonplaceholderComponent implements OnInit {

  constructor(private _postService: PostService){

    }
    posts:Post[];

    getAllPosts(){
        this._postService.getAllPosts().subscribe(
            data=>this.posts=data,
            error=>console.log(error),
            ()=>console.log("Completed!")
        )
    }
    ngOnInit(){
        this.getAllPosts();
    }

}
