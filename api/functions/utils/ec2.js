import * as AWS from "aws-sdk"

export default class EC2 {
    conn;

    constructor() {
        AWS.config.update({
            region: 'sa-east-1'
        })

        const ec2svc = new AWS.EC2({
            apiVersion: "2016-11-15"
        })

        this.conn = ec2svc
    }

    get conn() {
        return this.conn
    }
}