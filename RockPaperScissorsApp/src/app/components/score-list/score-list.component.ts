import { Component, Input, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';
import { User } from '../../models/ScoreModels';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent implements OnInit {

  constructor(public scoreService: ScoreService) { 
  }

  ngOnInit(): void {
  }

}
