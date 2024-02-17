const { Kafka } = require("kafkajs")

// get consumer group as command line arg
const consumerGroupName = process.argv[2]

run()

async function run() {
  try{
    const kafka = new Kafka({
      "clientId": "myapp",
      "brokers": ["192.168.137.1:9092"]
    })

    // create a new consumer in group test
    const consumer = kafka.consumer({"groupId": consumerGroupName})
    console.log("Connecting ....")
    await consumer.connect()
    console.log("Connected")

    // subscribe to Users topic
    // read from earliest available offset from all partitions
    consumer.subscribe({
      "topic": "Users",
      "fromBeginning": true
    })
    
    await consumer.run({
      "eachMessage": async result => console.log(`Received: ${result.message.value} on ${result.partition}`)
    })

  } catch(ex) {
    console.error(`Some error occurred ${ex}`)
  } finally {
    // process.exit(0)
  }
}