import { InternReportIntroductionGlossary } from "./intern-report-introduction-gloassary.vm";

export interface InternReportIntroductionVM {
    companyOverview?: string;
    projectOverview?: string;
    glossary?: InternReportIntroductionGlossary[];
}
