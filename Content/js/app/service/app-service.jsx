export default class AppService {
    static getMainResources(api, success, fails) {
        $.get(`${api}App/MainResources_Get`).done((response) => {
            success(JSON.parse(response.resources));
        }).fail((error) => {
            //console.log(error.responseJSON.Message);
            fails(error.responseJSON.Message);
        });
    }

    static getChangeRequestResources(api, success, fails) {
        $.get(`${api}App/ChangeRequestResources_Get`).done((response) => {
            success(JSON.parse(response.resources));
        }).fail((error) => {
            //console.log(error.responseJSON.Message);
            fails(error.responseJSON.Message);
        });
    }
}