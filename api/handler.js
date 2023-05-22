import AWS from "aws-sdk"
import EC2 from "./classes/ec2.js"

export const start = async(event, context) => {
    const response = {
        statusCode: 200,
        body: ""
    }

    const ec2 = new EC2()

    try {
        const instances = await ec2.getAllInstances()

        // instances.filter()

    } catch (error) {
        console.log(error)
    }finally{
        return response
    }
}