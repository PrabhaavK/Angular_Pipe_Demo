import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonformat',
  templateUrl: './jsonformat.component.html',
  styleUrls: ['./jsonformat.component.css']
})
export class JsonformatComponent implements OnInit {
  constructor() { }
  jsonVal: Object = {name:'Bill',address : {city: 'New York'}}
  ngOnInit(): void {
  }
}
