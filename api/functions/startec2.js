import EC2 from "./utils/ec2.js";
import { StatusCodes as status } from "http-status-codes"

export function startInstance(id = "") {
    try {
        if (id === "") throw new Error("instance id is a required field")

        const ec2 = new EC2().conn;

        var params = {
            InstanceIds: [id],
            DryRun: true
        };

        ec2.startInstances(params, function (err, data) {
            if (err && err.code === 'DryRunOperation') {
                params.DryRun = false;
                ec2.startInstances(params, function (err, data) {
                    if (err) throw err

                    console.log("started instances: ", data.StartingInstances);
                });
            } else {
                console.log("You don't have permission to start instances.");
            }
        });

        return {
            status: status.OK,
            body: "Started instance."
        }
    } catch (err) {
        console.log(err)

        return {
            status: status.INTERNAL_SERVER_ERROR,
            body: err.message
        }
    }
}
