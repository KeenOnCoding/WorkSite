import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacancy } from '../../models/vacancy';
import { DataStorageService } from '../../services/data-storage.service';
@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute, private data: DataStorageService) { }

    vacantion: Vacancy;

    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
                if (params['id']) {
                    this.vacantion = this.data.getJob(params['id']);
                }

            }
        );
    }
    navigateResume() {
        this.router.navigate(['/resume/send']);
    }
    onSubmit() { }
}
