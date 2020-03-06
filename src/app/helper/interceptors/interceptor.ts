import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    

    if (request.method.toLowerCase() === 'post') {     
        request =  request.clone({          
          headers: new HttpHeaders({
            'Content-Type':  'application/json',            
          })
        })         
    }else if(request.method.toLowerCase() === 'get'){
      request =  request.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      }) 
    }
    return next.handle(request);
  }

}


// 'authorization': `Bearer ${token}`



// body: {
//   TAP_REQ: this.helper.encryptDataFromRequest(request.body)
// },





// let token = localStorage.getItem('token');
    // if (token) {
    //   token = this.helper.decryptData(token);       
    // }else {
    //   token = null;
    // }