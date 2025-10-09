const soap = require('soap');
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

soap.createClient(url, function (err, client){
    if(err){
        console.log(err)
    } else {
       client.buscaDataAtual((err2, res) => {
        if(err2){
            console.log(err2)
        } else {
            console.log(res)
        }
       })
    }
    console.log('DESCRIBE -->', client.describe().AtendeClienteService.AtendeClientePort)//service name e port name tirados do documento XML
});
