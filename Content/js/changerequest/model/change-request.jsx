export default class ChangeRequest {

    constructor() {

        this.Id = 0;
        this.Title = '';
        this.Description = '';
        this.Justification = '';
        this.Impact = '';
        this.RequestDate = '';
        this.RequestBy = '';
        this.Status = '';
        this.Priority = '';
        this.NewColumn = '';
    }

    static Create(data) {
        let o = new ChangeRequest();
        Object.assign(o, data);
        return o;
    }

}