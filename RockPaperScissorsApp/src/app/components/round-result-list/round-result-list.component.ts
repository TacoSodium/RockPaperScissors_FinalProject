import { Component, OnInit } from '@angular/core';
import { RpsService } from 'src/app/services/rps.service';

@Component({
  selector: 'app-round-result-list',
  templateUrl: './round-result-list.component.html',
  styleUrls: ['./round-result-list.component.css']
})
export class RoundResultListComponent implements OnInit {

  constructor(public rpsService: RpsService) { }

  ngOnInit(): void {
  }

}
