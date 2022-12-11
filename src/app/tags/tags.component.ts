import { Component, OnInit } from '@angular/core';
import { tag } from '../shared/models/tag';
import { FoodService } from '../Services/food/food.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags:tag[]=[]
  constructor(private fs:FoodService) { }


  ngOnInit(): void {
    this.tags = this.fs.getAllTag()
  }

}
