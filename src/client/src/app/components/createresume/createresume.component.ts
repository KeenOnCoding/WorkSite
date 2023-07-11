import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Resume, Workplace } from '../../models/resume';
import { LocalStoreManager } from '../../services/local-store-manager.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-createresume',
    templateUrl: './createresume.component.html',
    styleUrls: ['./createresume.component.css']
})

export class CreateresumeComponent implements OnInit {

    resume: Resume = new Resume();
    resumes: Resume[];

    fromDate: NgbDate;
    toDate: NgbDate;


    closeResult: string;

    stertDate: NgbDate;
    endDate: NgbDate;

    isHeadEmpty: boolean;
    months = [
        { name: "January" },
        { name: "February" },
        { name: "March" },
        { name: "April" },
        { name: "May" },
        { name: "June" },
        { name: "July" },
        { name: "August" },
        { name: "September" },
        { name: "October" },
        { name: "November" },
        { name: "December" }
    ];
    days = [
        { name: "1" },
        { name: "2" },
        { name: "3" },
        { name: "4" },
        { name: "5" },
        { name: "6" },
        { name: "7" },
        { name: "8" },
        { name: "9" },
        { name: "10" },
        { name: "11" },
        { name: "12" },
        { name: "13" },
        { name: "12" },
        { name: "15" },
        { name: "16" },
        { name: "17" },
        { name: "18" },
        { name: "19" },
        { name: "20" },
        { name: "21" },
        { name: "22" },
        { name: "23" },
        { name: "24" },
        { name: "25" },
        { name: "26" },
        { name: "27" },
        { name: "28" },
        { name: "29" },
        { name: "30" },
        { name: "31" },
    ];
    years = [
        { name: "2000" },
        { name: "2001" },
        { name: "2002" }
    ];


    //yearr: string = 'YEAR';

    //startMonth: string = 'MONTH';
    //startYear: string = 'MONTH';
    //endMonth: string = 'MONTH';
    //endYear: string = 'MONTH';
    //startMonth: string = 'MONTH';

    focus;
    focus1;
    focus2;
    focus3;
    focus4;

    page = 2;
    page1 = 3;
    active = 1;
    active1 = 1;
    active2 = 1;

    constructor(private modalService: NgbModal, calendar: NgbCalendar,
        private router: Router,
        private localStr: LocalStoreManager) {
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }

    ngOnInit() {
        this.resume.workplaces = new Array as Workplace[];
        let firstWorkplace = new Workplace();
        firstWorkplace.desctiption = null;
        firstWorkplace.responsabilities = null;
        firstWorkplace.id = this.getRandomInt(1000).toString();
        this.resume.workplaces.push(firstWorkplace);

        let val = this.localStr.get('resumes');
        this.resumes = JSON.parse(val) as Resume[];
        if (this.resumes != null || undefined) {
            this.isHeadEmpty = false;
        }
        else { this.isHeadEmpty = true; }
    }

    createResume() {
        if (this.resumes == null) {
            this.resumes = new Array as Resume[];
            this.resume.id = 1;
            this.resumes.push(this.resume);
            this.localStr.create("resumes", this.resumes);
            this.router.navigate(['/resumes/']);
            return;
        }

            this.resume.id = this.resumes.length + 1;
            this.resumes.push(this.resume);
            this.localStr.create("resumes", this.resumes);
            this.router.navigate(['/resumes/']);
    }

    private getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}
