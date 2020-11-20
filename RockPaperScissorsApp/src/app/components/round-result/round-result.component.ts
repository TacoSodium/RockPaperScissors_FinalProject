import { Component, Input, OnInit } from '@angular/core';
import { Round } from 'src/app/models/Round';

@Component({
  selector: 'app-round-result',
  templateUrl: './round-result.component.html',
  styleUrls: ['./round-result.component.css']
})
export class RoundResultComponent implements OnInit {

  @Input()
  round: Round;

  constructor() { }

  ngOnInit(): void {
  }

}
