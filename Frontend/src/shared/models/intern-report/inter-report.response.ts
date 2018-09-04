import { BaseResponse } from "../base.response";
import { InternReportVM } from "./intern-report.vm";

export interface InternReportResponse extends BaseResponse {
    internReports?: InternReportVM[];
}