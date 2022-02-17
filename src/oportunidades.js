import {LightningElement, api} from "lwc";


export default class oportunidades extends LightningElement{
    @api nome;
    @api valor;
    @api fechamento;
}