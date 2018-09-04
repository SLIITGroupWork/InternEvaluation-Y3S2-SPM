import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { FormGroup, FormControl, FormArray, AbstractControl, Validators } from '@angular/forms';

@Component({
    selector: 'intern-report',
    templateUrl: './intern-report.component.html',
    styleUrls: ['./intern-report.component.css']
})
export class InternReportComponent implements OnInit {

    public steps: MenuItem[] = [
        { label: 'Introduction' },
        { label: 'Internship Insight' },
        { label: 'Learning Outcome' },
        { label: 'Sample Work' }
    ];

    public activeIndex: number = 0;

    public internReportForm: FormGroup = new FormGroup({
        introduction: new FormGroup({
            companyOverview: new FormControl('', Validators.required),
            projectOverview: new FormControl('', Validators.required),
            glossary: new FormArray([])
        }),
        internshipInsight: new FormGroup({
            objectives: new FormControl('', Validators.required),
            procedures: new FormControl('', Validators.required),
            methodology: new FormControl('', Validators.required)
        }),
        learningOutcome: new FormGroup({
            learning: new FormControl('', Validators.required),
            measurableOutcome: new FormControl('', Validators.required),
            effectivenessEffort: new FormControl('', Validators.required)
        }),
        sampleWork: new FormArray([])
    });

    constructor() { }

    //#region internReportForm's AbstractControls

    public get irFormIntroduction(): AbstractControl {
        return this.internReportForm.get('introduction');
    }

    public get irFormInternshipInsight(): AbstractControl {
        return this.internReportForm.get('internshipInsight');
    }

    public get irFormLearningOutcome(): AbstractControl {
        return this.internReportForm.get('learningOutcome');
    }

    public get irFormSampleWork(): AbstractControl {
        return this.internReportForm.get('sampleWork');
    }

    //#endregion

    //#region irFormIntroduction's AbstractControls

    public get irFormIntroductionCompanyOverview(): AbstractControl {
        return this.irFormIntroduction.get('companyOverview');
    }

    public get irFormIntroductionProjectOverview(): AbstractControl {
        return this.irFormIntroduction.get('projectOverview');
    }

    public get irFormIntroductionGlossary(): AbstractControl {
        return this.irFormIntroduction.get('glossary');
    }

    //#endregion

    //#region irFormInternshipInsight's AbstractControls

    public get irFormInternshipInsightObjectives(): AbstractControl {
        return this.irFormInternshipInsight.get('objectives');
    }

    public get irFormInternshipInsightProcedures(): AbstractControl {
        return this.irFormInternshipInsight.get('procedures');
    }

    public get irFormInternshipInsightMethodology(): AbstractControl {
        return this.irFormInternshipInsight.get('methodology');
    }

    //#endregion

    //#region irFormLearningOutcome's AbstractControls

    public get irFormLearningOutcomeLearning(): AbstractControl {
        return this.irFormLearningOutcome.get('learning');
    }

    public get irFormLearningOutcomeMeasurableOutcome(): AbstractControl {
        return this.irFormLearningOutcome.get('measurableOutcome');
    }

    public get irFormLearningOutcomeEffectivenessEffort(): AbstractControl {
        return this.irFormLearningOutcome.get('effectivenessEffort');
    }

    //#endregion

    ngOnInit() {
    }    

    //#region internReportForm's Method

    public internReportFormIntroductionGlossaryForm(): FormGroup {
        return new FormGroup({
            abbreviation: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required)
        });
    }

    public internReportFormSampleWorkForm(): FormGroup {
        return new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required)
        });
    }

    //#endregion
}
