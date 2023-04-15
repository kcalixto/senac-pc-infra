import * as AWS from "aws-sdk"

export default class VPC {
    conn;

    constructor() {
        AWS.config.update({
            region: 'sa-east-1'
        })

        const svc = new AWS.VPC

    }

    get conn() {
        return this.conn;
    }
}