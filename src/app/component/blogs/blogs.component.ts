import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_serice/common.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogData: any;

  constructor(private commonservice: CommonService ) { }

  ngOnInit(): void {
    var data: any
  this.commonservice.getRequest(data).subscribe(data=>{
    this.blogData= data
    console.log(this.blogData)
  })
  }

}
