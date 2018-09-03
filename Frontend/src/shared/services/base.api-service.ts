import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseResponse } from "../models";

@Injectable()
export class BaseApiService {

    private readonly authHeaderKey = 'Authorization';
    private readonly authLocalStorageKey = 'authToken';
    private readonly baseUrl: string = 'http://localhost:5556/api/';

    private headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(
        private httpClient: HttpClient
    ) { 
        this.setAuthTokenToHeader();
    }

    private setAuthTokenToHeader(): void {
        let authToken = localStorage.getItem(this.authLocalStorageKey);
        if (authToken) {
            localStorage.setItem(this.authLocalStorageKey, authToken.toString());
        }
    }

    public login(authToken: string): void {
        this.logout();

        localStorage.setItem(this.authLocalStorageKey, authToken);
        this.headers.append(this.authHeaderKey, authToken);
    }

    public logout(): void {
        if (this.headers.has(this.authHeaderKey)) {
            this.headers.delete(this.authHeaderKey);
        }

        if (localStorage.getItem(this.authLocalStorageKey)) {
            localStorage.removeItem(this.authLocalStorageKey);
        }
    }

    /**
     * Can call api end point with get
     * @param path Path to end point
     * @returns Return a Promise<Response>
     */
    public get<Response extends BaseResponse>(path: string): Promise<Response> {

        return new Promise<Response>((resolve) => {
            this.httpClient.get<Response>(this.baseUrl + path, { headers: this.headers }).subscribe(response => {
                resolve(response);
            }, err => {
                let tempResponse: BaseResponse = {
                    status: err.status > 0 ? Number(err.status) : 0,
                    isSuccess: false,
                    message: err.message ? err.message : 'Something went wrong...'
                };
                resolve(tempResponse as Response);
            });
        });
    }

    /**
     * Can call api end point with post
     * @param path Path to end point
     * @param request Request that need to send
     * @returns Return a Promise<Response>
     */
    public post<Response extends BaseResponse, Request extends BaseResponse>(path: string, request: Request): Promise<Response> {

        return new Promise<Response>((resolve) => {
            this.httpClient.post<Response>(this.baseUrl + path, request, { headers: this.headers }).subscribe(response => {
                resolve(response);
            }, err => {
                let tempResponse: BaseResponse = {
                    status: err.status > 0 ? Number(err.status) : 0,
                    isSuccess: false,
                    message: err.message ? err.message : 'Something went wrong...'
                };
                resolve(tempResponse as Response);
            });
        });
    }

    /**
     * Can call api end point with put
     * @param path Path to end point
     * @param request Request that need to send
     * @returns Return a Promise<Response>
     */
    public put<Response extends BaseResponse, Request extends BaseResponse>(path: string, request: Request): Promise<Response> {

        return new Promise<Response>((resolve) => {
            this.httpClient.put<Response>(this.baseUrl + path, request, { headers: this.headers }).subscribe(response => {
                resolve(response);
            }, err => {
                let tempResponse: BaseResponse = {
                    status: err.status > 0 ? Number(err.status) : 0,
                    isSuccess: false,
                    message: err.message ? err.message : 'Something went wrong...'
                };
                resolve(tempResponse as Response);
            });
        });
    }

    /**
     * Can call api end point with delete
     * @param path Path to end point
     * @returns Return a Promise<Response>
     */
    public delete<Response extends BaseResponse>(path: string): Promise<Response> {

        return new Promise<Response>((resolve) => {
            this.httpClient.delete<Response>(this.baseUrl + path, { headers: this.headers }).subscribe(response => {
                resolve(response);
            }, err => {
                let tempResponse: BaseResponse = {
                    status: err.status > 0 ? Number(err.status) : 0,
                    isSuccess: false,
                    message: err.message ? err.message : 'Something went wrong...'
                };
                resolve(tempResponse as Response);
            });
        });
    }

}