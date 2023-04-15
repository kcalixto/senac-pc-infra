import app from "./server/app.js"
import awsServerlessExpress from "aws-serverless-express"
import http from "http"

const server = awsServerlessExpress.createServer(app, null, null)

export const handler = async (event, context) => {
    return awsServerlessExpress.proxy(server, event, context)
}

const running_local = () => {
    const options = {
        port: 80
    }

    console.log(`started server at port ${options.port}`)
    http.createServer(app).listen(options.port)
}
running_local()