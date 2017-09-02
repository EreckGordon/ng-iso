import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BlogService } from './blog.service';

@Component({
  selector: 'my-blog',
  templateUrl: './blog.component.html'
})

export class BlogComponent implements OnInit, OnDestroy {
  destroy:  Subject<any> = new Subject();


  constructor(blogService: BlogService) {}

  ngOnInit() {}


  ngOnDestroy() {
  	this.destroy.next();
  }


}
