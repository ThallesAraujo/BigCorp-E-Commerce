import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Service } from '../protocols/service.protocol'

@Injectable({
    providedIn: "root"
})
export class PedidoService extends Service{

    resourceUrl: string;
    private httpClient: HttpClient

    constructor(client: HttpClient){
        super(client)
        this.httpClient = client
        this.resourceUrl = `${environment.BaseURL}/pedidos`
    }

    getPedidosByIdCliente = (idCliente) : Observable<any> => {
        return this.httpClient.get(`${environment.BaseURL}/clientes/${idCliente}/pedidos`)
    }

}