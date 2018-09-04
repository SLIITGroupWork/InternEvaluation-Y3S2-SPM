import { InternReportIntroductionVM } from "./intern-report-introduction.vm";
import { InternReportInternshipInsightVM } from "./intern-report-internship-insight.vm";
import { InternReportLearningOutcomeVM } from "./intern-report-learning-outcome.vm";
import { InternReportSampleWorkVM } from "./intern-report-sample-work.vm";

export interface InternReportVM {
    introduction?: InternReportIntroductionVM;
    internshipInsight?: InternReportInternshipInsightVM;
    learningOutcome?: InternReportLearningOutcomeVM;
    sampleWork?: InternReportSampleWorkVM[];
}