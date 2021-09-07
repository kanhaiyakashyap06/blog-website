import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/_serice/common.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  addblog!: FormGroup
  newpost: any;
  constructor(private fb: FormBuilder,private commonservice: CommonService,private router: Router) { }

  ngOnInit(): void {
    this.createform()
  }
 createform(){
   this.addblog= this.fb.group({
     title: ['',Validators.required],
     author: [''],
     short_desc: [''],
     image:['']
   })
 }
 submit(){
   this.commonservice.postRequest(this.addblog.value).subscribe(data=>{
    this.newpost =data
    console.log(this.addblog.value)
    console.log(this.newpost)
    this.router.navigateByUrl('/')
   })
 }
}
