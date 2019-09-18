import moment from 'moment';

export default class ChangeRequestService {
    static save(api, obj, success, fails) {

        //Fix the issue with the moment Data object. Backend can't be read moment objects.
        obj.RequestDate = moment(obj.RequestDate).format("DD-MM-YYYY HH:mm:SS");

        $.post(`${api}ChangeRequest/Save`, obj).done((response) => {
            success(response.message);
        }).fail((error) => {
            //console.log(error.responseJSON.Message);
            fails(error.responseJSON.Message);
        });
    }

    static get(api, id, success, fails) {
        console.log("Edit: " + id);
        //$.get(`${api}ChangeRequest/Get`, id).done((response) => {
        //    success(response.changerequest);
        //}).fail((error) => {
        //    //console.log(error.responseJSON.Message);
        //    fails(error.responseJSON.Message);
        //});
    }

}