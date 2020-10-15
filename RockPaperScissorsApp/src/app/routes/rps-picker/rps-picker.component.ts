import { Component, OnInit } from '@angular/core';
import { RpsService } from "../../rps.service";

@Component({
  selector: 'app-rps-picker',
  templateUrl: './rps-picker.component.html',
  styleUrls: ['./rps-picker.component.css']
})
export class RpsPickerComponent implements OnInit {

  constructor(private Rpsservice: RpsService) { }

  ngOnInit(): void {
  }

}
