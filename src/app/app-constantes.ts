export class AppConstantes {

    //CONFIRMA DATOS
    private urlPath = location.protocol + "//" + document.domain + ":";
    private API_ENDPOINT_TIPO_CLIENTE = '/com.bancolombia.clientes.api.tipoCliente';
    private ENDPOINT_TIPO_CLIENTE = this.urlPath + this.API_ENDPOINT_TIPO_CLIENTE;

    
    public static get API_ENDPOINT(): string { return '/com.bancolombia.clientes.api.tipoCliente'; }
    public static get OBTENER_URL_REDIRECCION_REST(): string { return '/rest/servicio/validate'; }
    
    //TRANSVERSALES
    public static get MSG_ERROR_SESION_EXPIRADA(): string { return 'sesion_expirada'; }
}