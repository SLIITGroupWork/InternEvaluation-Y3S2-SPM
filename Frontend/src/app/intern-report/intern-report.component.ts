import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/primeng';
import { FormGroup, FormControl, FormArray, AbstractControl, Validators } from '@angular/forms';
import { InternReportValidator } from './intern-report.validator';
import { InternReportVM, InternReportRequest } from '../../shared';
import { InternReportService } from '../../shared/services/inter-report.service';

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
        sampleWork: new FormArray([this.internReportFormSampleWorkForm(), this.internReportFormSampleWorkForm()], InternReportValidator.sampleWorkMinLength)
    });

    constructor(
        private apiService: InternReportService,
        private msgService: MessageService
    ) { }

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

    public get irFormSampleWork(): FormArray {
        return this.internReportForm.get('sampleWork') as FormArray;
    }

    //#endregion

    //#region irFormIntroduction's AbstractControls

    public get irFormIntroductionCompanyOverview(): AbstractControl {
        return this.irFormIntroduction.get('companyOverview');
    }

    public get irFormIntroductionProjectOverview(): AbstractControl {
        return this.irFormIntroduction.get('projectOverview');
    }

    public get irFormIntroductionGlossary(): FormArray {
        return this.irFormIntroduction.get('glossary') as FormArray;
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

    //#region internReportForm's glossary group

    public internReportFormIntroductionGlossaryForm(): FormGroup {
        return new FormGroup({
            abbreviation: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required)
        });
    }

    public irFormIntroductionGlossaryArrayFormByIndex(index: number): AbstractControl {
        return this.irFormIntroductionGlossary.at(index);
    }

    public irFormIntroductionGlossaryDescriptionArrayFormByIndex(index: number): AbstractControl {
        let formGroup = this.irFormIntroductionGlossaryArrayFormByIndex(index);

        if (formGroup) {
            return formGroup.get('description');
        }

        return null;
    }

    public irFormIntroductionGlossaryAbbreviationArrayFormByIndex(index: number): AbstractControl {
        let formGroup = this.irFormIntroductionGlossaryArrayFormByIndex(index);

        if (formGroup) {
            return formGroup.get('abbreviation');
        }

        return null;
    }

    public addNewGlossaryForm(): void {
        this.irFormIntroductionGlossary.push(this.internReportFormIntroductionGlossaryForm());
    }


    public deleteGlossaryForm(formIndex: number): void {
        this.irFormIntroductionGlossary.removeAt(formIndex);
    }

    //#endregion

    //#region internReportForm's SampleWork Form Array Method    

    public internReportFormSampleWorkForm(): FormGroup {
        return new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required)
        });
    }

    public irFormSampleWorkFormByIndex(index: number): AbstractControl {
        return this.irFormSampleWork.at(index);
    }

    public irFormSampleWorkFormTitle(index: number): AbstractControl {
        let formGroup = this.irFormSampleWorkFormByIndex(index);

        if (formGroup) {
            return formGroup.get('title');
        }

        return null;
    }

    public irFormSampleWorkFormDescription(index: number): AbstractControl {
        let formGroup = this.irFormSampleWorkFormByIndex(index);

        if (formGroup) {
            return formGroup.get('description');
        }

        return null;
    }

    public addNewSampleWorkForm(): void {
        if (this.irFormSampleWork.length < 5) {
            this.irFormSampleWork.push(this.internReportFormSampleWorkForm())
        }
    }

    public deleteSampleWorkForm(index: number): void {
        this.irFormSampleWork.removeAt(index);
    }

    //#endregion

    public onPreviousClick(): void {
        if (this.activeIndex > 0) {
            this.activeIndex--;
        }
    }

    public onNextClick(): void {
        if (this.activeIndex < 3) {
            this.activeIndex++;
        }
        else {
            this.onCompleteClick();
        }
    }

    public resetInternReportForm(): void {

        while (this.irFormIntroductionGlossary.length > 0) {
            this.deleteGlossaryForm(0);
        }

        while (this.irFormSampleWork.length > 0) {
            this.deleteSampleWorkForm(0);
        }

        this.addNewSampleWorkForm();
        this.addNewSampleWorkForm();

        this.internReportForm.reset();
        this.activeIndex = 0;
    }

    public async onCompleteClick(): Promise<void> {
        if (this.internReportForm.valid) {
            let internReport: InternReportVM = {
                introduction: {
                    companyOverview: this.irFormIntroductionCompanyOverview.value,
                    projectOverview: this.irFormIntroductionProjectOverview.value,
                    glossary: []
                },
                internshipInsight: {
                    objectives: this.irFormInternshipInsightObjectives.value,
                    methodology: this.irFormInternshipInsightMethodology.value,
                    procedures: this.irFormInternshipInsightProcedures.value
                },
                learningOutcome: {
                    learning: this.irFormLearningOutcomeLearning.value,
                    measurableOutcome: this.irFormLearningOutcomeMeasurableOutcome.value,
                    effectivenessEffort: this.irFormLearningOutcomeEffectivenessEffort.value
                },
                sampleWork: []
            };

            for (let ind = 0, len = this.irFormIntroductionGlossary.length; ind < len; ind++) {
                internReport.introduction.glossary.push({
                    abbreviation: this.irFormIntroductionGlossaryAbbreviationArrayFormByIndex(ind).value,
                    description: this.irFormIntroductionGlossaryDescriptionArrayFormByIndex(ind).value
                });
            }

            for (let ind = 0, len = this.irFormSampleWork.length; ind < len; ind++) {
                internReport.sampleWork.push({
                    title: this.irFormSampleWorkFormTitle(ind).value,
                    description: this.irFormSampleWorkFormDescription(ind).value
                });
            }

            let internReportRequest: InternReportRequest = {
                internReport: internReport
            };

            this.internReportForm.disable();
            let response = await this.apiService.submitInternReport(internReportRequest)
            this.internReportForm.enable();
            
            if (response.isSuccess) {
                this.msgService.add({ severity: 'success', summary: 'Successfully Posted', detail: 'Inern Report successfully posted' });
                this.resetInternReportForm();
            }
            else {
                this.msgService.add({ severity: 'error', summary: 'Failed to post', detail: 'Something went wrong' });
            }
        }
    }
}
