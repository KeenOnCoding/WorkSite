import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resume } from '../../models/resume';
import { LocalStoreManager } from '../../services/local-store-manager.service';

@Component({
    selector: 'app-resumes',
    templateUrl: './resumes.component.html',
    styleUrls: ['./resumes.component.css']
})
export class ResumesComponent implements OnInit {

    resumes: Resume[] = [];
    isEmpty: boolean = true;

    constructor(private router: Router, private localStr: LocalStoreManager) { }

    ngOnInit(): void {
        //this.localStr.flush();

        let val = this.localStr.get('resumes');
        this.resumes = JSON.parse(val) as Resume[];

        if (this.resumes != null) {
            this.isEmpty = false;
        }

    }
    navigateResume(id: any) {
        this.router.navigate(['/resume'], { queryParams: { id: id } });
    }
    navigateCreateResume() {
        this.router.navigate(['/resume/create']);
    }
}
