import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export abstract class Service{

    abstract resourceUrl: string

    constructor(private client: HttpClient){
        this.client = client
    }

    getAll(): Observable<any>{
        return this.client.get(this.resourceUrl, {});
    }

    get(objId: any): Observable<any>{
        return this.client.get(`${this.resourceUrl}/${objId}`);
    }

    post(obj: any): Observable<any>{
        const options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            }),
          };

        return this.client.post(this.resourceUrl, obj, options)
    }

    put(obj: any): Observable<any>{
        const options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            }),
          };
          
        return this.client.put(this.resourceUrl, obj, options)
    }

    delete(idObj: string): Observable<any>{
        return this.client.delete(`${this.resourceUrl}/${idObj}`);
    }

}