
export default class MainService {
    static getList(api, success, fails) {

        $.get(`${api}Main/List`).done((response) => {
            success(response.list);
        }).fail((error) => {
            //console.log(error.responseJSON.Message);
            fails(error.responseJSON.Message);
        });
    }

}