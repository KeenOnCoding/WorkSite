import { Component, OnInit } from '@angular/core';
import { Resume } from '../../../models/resume';
import { LocalStoreManager } from '../../../services/local-store-manager.service';



@Component({
  selector: 'app-resume-to-send',
  templateUrl: './resume-to-send.component.html',
  styleUrls: ['./resume-to-send.component.css']
})
export class ResumeToSendComponent implements OnInit {

    page = 2;
    page1 = 3;
    active = 1;
    active1 = 1;
    active2 = 1;

    resumes: Resume[] = [];
    isEmpty: boolean = true;

    constructor(private localStr: LocalStoreManager) { }

    ngOnInit(): void {
        let val = this.localStr.get('resumes');
        this.resumes = JSON.parse(val) as Resume[];
        if (this.resumes != null) {
            this.isEmpty = false;
        }
    }

}
