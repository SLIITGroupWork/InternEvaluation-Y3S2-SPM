import { FormArray, ValidationErrors } from "@angular/forms";

export class InternReportValidator {

    public static sampleWorkMinLength(formArray: FormArray): ValidationErrors | null {
        if (formArray && formArray.length < 2) {
            return { sampleWorkMinLength: true };
        }

        return null;
    }
}