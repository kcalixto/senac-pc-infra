import * as AWS from "aws-sdk"

function newEc2Svc() {
    AWS.config.update({
        region: 'sa-east-1'
    })

    const ec2svc = new AWS.EC2({
        apiVersion: "2016-11-15"
    })

    return ec2svc
}

export function startInstance() {
    try {
        const ec2 = newEc2Svc()

        var params = {
            InstanceIds: "",
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
            "StatusCode": 200,
            "Body": "Started instance."
        }
    } catch (err) {
        console.log(err)

        return {
            "StatusCode": 500,
        }
    }
}

export function stopInstance() {
    try {
        const ec2 = newEc2Svc()

        var params = {
            InstanceIds: "",
            DryRun: true
        };

        ec2.stopInstances(params, function (err, data) {
            if (err && err.code === 'DryRunOperation') {
                params.DryRun = false;
                ec2.stopInstances(params, function (err, data) {
                    if (err) throw err

                    console.log("stopped instances: ", data.StartingInstances);
                });
            } else {
                console.log("You don't have permission to stop instances.");
            }
        });

        return {
            "StatusCode": 200,
            "Body": "Stopped instance."
        }
    } catch (err) {
        console.log(err)

        return {
            "StatusCode": 500,
        }
    }
}
stopInstance()