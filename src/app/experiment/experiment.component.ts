import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {
  arr:any;
  
  constructor() { }

  ngOnInit(): void {
    this.compute();
  }

  compute(){
    this.arr = [1,2,3,4,5];
    console.log(_.find(this.arr,x=>{return x==3}))
  }

}
