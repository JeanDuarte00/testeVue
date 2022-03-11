import api from '@/services/api';

export default class CargoService {

    constructor() {
    }

    listarMunicipiosDoMaranhao() {
        return api
            .get('/v1/localidades/estados/21/municipios')
            .then(response => response.data);
    }

    listarRankingDeNomesPorLocalidade(idLocalidade) {        
        return api
            .get(`/v2/censos/nomes/ranking?localidade=${idLocalidade}`)
            .then(response => response.data);
    }
/*
    Lista de Estados
    https://servicodados.ibge.gov.br/api/v1/localidades/estados    
    Lista de municípios por estado
    Maranhão = 21
    https://servicodados.ibge.gov.br/api/v1/localidades/estados/21/municipios    
    Ranking de nome por localidade
    Açailandia = 2100055
    https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking?localidade=2100055    
*/
    
}