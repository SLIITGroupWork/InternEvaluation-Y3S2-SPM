import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class ApiService {

    errorStatus = false;
    private API_URL = 'http://localhost:5556/api';

    constructor(
        private https: Http,
        private router: Router
    ) { }



    public submitForm5(body: any): Observable<any[]> {
        return this.https
            .post(`${this.API_URL}/supervisor`, body)
            .map(response => {
                const payload = response.json();
                return payload;
            })
            .catch(this.formatError);
    }




    public getFormByStudentId(id): Observable<any[]> {
        return this.https
            .get(`${this.API_URL}/formI5/${id}`)
            .map(response => {
                const payload = response.json();
                return payload;
            })
            .catch(this.formatError);
    }


    public sendMailForm5(body: any): Observable<any[]> {
        return this.https
            .post(`${this.API_URL}/formI5/sendFormI5`, body)
            .map(response => {
                const payload = response.json();
                return payload;
            })
            .catch(this.formatError);
    }

  public sendMailForm3(body: any): Observable<any[]> {
    return this.https
      .post(`${this.API_URL}/supervisor/sendFormI3`, body)
      .map(response => {
        const payload = response.json();
        return payload;
      })
      .catch(this.formatError);
  }

















    // public getUsers(): Observable<any[]> {
    //     return this.https
    //         .get(`${this.API_URL}/user`)
    //         .map(response => {
    //             const payload = response.json();
    //             return payload;
    //         })
    //         .catch(this.formatError);
    // }

    // public getCoursesByUserId(id): Observable<any[]> {
    //     return this.https
    //         .get(`${this.API_URL}/courses/user/${id}`)
    //         .map(response => {
    //             const payload = response.json();
    //             return payload;
    //         })
    //         .catch(this.formatError);
    // }

    // public registerUser(body: any): Observable<any[]> {
    //     return this.https
    //         .post(`${this.API_URL}/users/signup`, body)
    //         .map(response => {
    //             const payload = response.json();
    //             return payload;
    //         })
    //         .catch(this.formatError);
    // }

    // public loginUser(body: any): Observable<any[]> {
    //     return this.https
    //         .post(`${this.API_URL}/users/login`, body)
    //         .map(response => {
    //             const payload = response.json();
    //             return payload;
    //         })
    //         .catch(this.formatError);
    // }

    // public getUserById(id): Observable<any[]> {

    //     return this.https
    //         .get(`${this.API_URL}/users/details/${id}`)
    //         .map(response => {
    //             const payload = response.json();
    //             return payload;
    //         })
    //         .catch(this.formatError);
    // }



    // public updateUser(id, body: any): Observable<any[]> {
    //     return this.https
    //         .post(`${this.API_URL}/users/update/${id}`, body)
    //         .map(response => {
    //             const payload = response.json();
    //             return payload;
    //         })
    //         .catch(this.formatError);
    // }

    // public deleteUser(id, body: any): Observable<any[]> {
    //     return this.https
    //         .post(`${this.API_URL}/users/delete/${id}`, body)
    //         .map(response => {
    //             const payload = response.json();
    //             return payload;
    //         })
    //         .catch(this.formatError);
    // }


    // --------------- Error Handling Start ----------------------
    private formatError(error: any) {
        console.error('ApiService::handleError', error);
        this.errorStatus = true;
        console.log('Server Erorr');
        return Observable.throw(error.json());
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        this.errorStatus = true;
        console.log('Server Erorr');
        return Observable.throw(error);
    }
    // --------------- Error Handling end ----------------------






}
