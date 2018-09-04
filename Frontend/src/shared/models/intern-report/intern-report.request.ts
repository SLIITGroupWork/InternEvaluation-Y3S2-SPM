import { BaseRequest } from "../base.request";
import { InternReportVM } from "./intern-report.vm";

export interface InternReportRequest extends BaseRequest {
    internReport?: InternReportVM;
}