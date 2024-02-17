const { Kafka } = require("kafkajs")

const msg = process.argv[2]

run()
async function run() {
  try{

    // to create a topic, we need to create an admin connection
    // establish a tcp connection with broker
    const kafka = new Kafka({
      "clientId": "myapp",
      "brokers": ["192.168.137.1:9092"]
    })

    const producer = kafka.producer()
    console.log("Connecting ....")
    await producer.connect()
    console.log("Connected")

    // for messages beginning with A-M --- partition 0
    // for N-Z ------ partition 1
    const partition = msg[0] < "N" ? 0 : 1
    const result = producer.send({
      "topic": "Users",
      "messages": [
        {
          "value": msg,
          "partition": partition
        }
      ] 
    })
    console.log("Sent successfully!", await result)
    await producer.disconnect()
  } catch(ex) {
    console.error(`Some error occurred ${ex}`)
  } finally {
    process.exit(0)
  }
}