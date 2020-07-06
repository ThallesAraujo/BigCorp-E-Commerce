import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Service } from '../protocols/service.protocol'

@Injectable({
    providedIn: "root"
})
export class ClienteService extends Service{

    resourceUrl: string;

    constructor(client: HttpClient){
        super(client)
        this.resourceUrl = `${environment.BaseURL}/clientes`
    }

}