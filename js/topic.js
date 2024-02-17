const { Kafka } = require("kafkajs")

run()
async function run() {
  try{

    // to create a topic, we need to create an admin connection
    // establish a tcp connection with broker
    const kafka = new Kafka({
      "clientId": "myapp",
      "brokers": ["192.168.137.1:9092"]
    })

    const admin = kafka.admin()
    console.log("Connecting ....")
    await admin.connect()
    console.log("Connected")

    await admin.createTopics({
      topics: [{
        "topic": "Users",
        "numPartitions": 2
      }]
    })
    console.log("Done")

    await admin.disconnect()
  } catch(ex) {
    console.error(`Some error occurred ${ex}`)
  } finally {
    process.exit(0)
  }
}