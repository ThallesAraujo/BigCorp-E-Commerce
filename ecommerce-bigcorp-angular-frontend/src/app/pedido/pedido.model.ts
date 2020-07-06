import { ProdutoPedido } from './produto-pedido.model';

export class Pedido{

    id: String;
    dataCadastro: String;
    idCliente: String;
    statusEntrega: String;
    produtos: [ProdutoPedido]

}