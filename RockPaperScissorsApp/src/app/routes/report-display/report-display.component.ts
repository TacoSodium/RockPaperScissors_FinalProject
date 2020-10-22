import { Component, OnInit } from '@angular/core';
import { ScoreService } from "../../services/score.service";

@Component({
  selector: 'app-report-display',
  templateUrl: './report-display.component.html',
  styleUrls: ['./report-display.component.css']
})
export class ReportDisplayComponent implements OnInit {

  constructor(public scoreService: ScoreService) { 
  }

  ngOnInit(): void {
  }

}
