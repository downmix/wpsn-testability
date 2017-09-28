require('./env')

const createApp = require('./src/app')
const slack = require('./src/slack')
const bugsnag = require("bugsnag");
bugsnag.register("dd50d5208208d5f4cbde7b3bf08bac8b");

const app = createApp({postMessage: slack.postMessage})
app.use(bugsnag.requestHandler);
app.use(bugsnag.errorHandler);


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`listening ${PORT}...`)
})
