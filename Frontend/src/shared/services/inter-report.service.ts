import { Injectable } from "@angular/core";
import { BaseApiService } from "./base.api-service";
import { InternReportResponse, InternReportRequest } from "../models";

@Injectable()
export class InternReportService {

    private baseUrl = 'intern-report/';

    constructor(
        private apiService: BaseApiService
    ) { }

    public submitInternReport(request: InternReportRequest): Promise<InternReportResponse> {
        return this.apiService.post<InternReportResponse, InternReportRequest>(`${this.baseUrl}submit-intern-report`, request);
    }
}