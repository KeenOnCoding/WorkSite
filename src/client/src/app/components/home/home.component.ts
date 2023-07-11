import { Component, OnInit } from '@angular/core';
import { LocalStoreManager } from '../../services/local-store-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private localStr: LocalStoreManager) { }

    ngOnInit(): void {

       //this.localStr.flush();
  }

}
