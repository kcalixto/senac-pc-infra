import AWS from "aws-sdk"
import * as dotenv from "dotenv"

export function load(){
    dotenv.config()
    AWS.config.update({
        region: 'sa-east-1'
    })

    const ec2 = new AWS.EC2();

    const instanceID = process.env.INSTANCE_ID
    if (!instanceID) {
        console.log("instanceID not found")
    }

    const volumeID = process.env.VOLUME_ID
    if (!volumeID) {
        console.log("volumeID not found")
    }

    console.log("instanceID: " + instanceID)
    console.log("volumeID: " + volumeID)

    const params = {
        InstanceId: process.env.INSTANCE_ID, // replace with your instance ID
        VolumeId: process.env.VOLUME_ID, // replace with your volume ID
        Device: '/dev/sdf' // replace with your device name
    };

    ec2.detachVolume(params, function (err, data) {
        if (err) {
            console.log("Error detaching volume:", err);
        } else {
            console.log("Volume detached successfully:", data);
        }
    });
}
load()