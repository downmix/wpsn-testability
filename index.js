require('./env')

const createApp = require('./src/app')
const slack = require('./src/slack')
const bugsnag = require("bugsnag");
bugsnag.register(process.env.BUGSNAG_KEY);

const app = createApp({postMessage: slack.postMessage})
app.use(bugsnag.requestHandler);
app.use(bugsnag.errorHandler);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`listening ${PORT}...`)
})
