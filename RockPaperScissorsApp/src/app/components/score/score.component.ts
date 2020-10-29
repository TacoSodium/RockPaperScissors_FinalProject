import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/ScoreModels'

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input()
  score: User;

  constructor() { }

  ngOnInit(): void {
  }

}
