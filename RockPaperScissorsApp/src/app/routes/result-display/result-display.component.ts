import { Component, OnInit } from '@angular/core';
import { RpsService } from "../../rps.service";

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  constructor(private Rpsservice: RpsService) { }

  ngOnInit(): void {
  }

}
