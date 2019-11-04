import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpInteceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Intercepting the request.");
        const idToken = localStorage.getItem("jwt-token");
        let language = localStorage.getItem("selectedLanaguageCode");
        language = language == "" || language == undefined ? "en" : language;
        if (idToken) {            
            console.log("Appending JWT token to request header.");
            const cloned = req.clone({
                headers: req.headers.set("Authorization", idToken)
            });
            return next.handle(cloned);
        } else {
            //return next.handle(req);
            // const cloned = req.clone({
            //     headers: req.headers.set("Accept-Language", language)
            // });
            return next.handle(req);
        }
    }
}
