# Kafka :

### Why Kafka:
- Able to connect a large number of clients (Producers and Consumers)
- Durable
  - Disk based retention
  - Data is replicated across brokers
- Scalable
  - Expansions can be performed while the cluster is online
- High Performance
  - Producers, consumers, and brokers can all be scaled to handle very large message streams
  - Sub-second message latency to consumers

### Kafka Broker:
Kafka Broker is essentially a Kafka Server.
Producers publish content to a Broker and Consumers consume from the broker.

### Topic:
Logical Paritions where content is written.

This is basically what it looks like:

![image](https://github.com/anushkadeshpande/apache-kafka/assets/53345232/21fdda5b-dd69-48dd-86d0-0deaf18e70cb)


> We can only write to Kafka not delete (it is append only)

Each message is referred by it's topic and position


### Partition:

The topic keeps getting larger, and accessing data in it can become difficult.

So, we partition it, i.e distribute the data logically based on some condition.

![image](https://github.com/anushkadeshpande/apache-kafka/assets/53345232/78b94252-9b83-464f-b0fb-d63eed371144)


### Queue and PubSub:
A **Queue** is where message is published and consumer consumes it and it is deleted from queue.

But in **PubSub**, data is produced and it is broadcasted among the consumers.

Kafka can do both with the help of **Consumer Groups**.

### Consumer Groups:

![image](https://github.com/anushkadeshpande/apache-kafka/assets/53345232/4f677ebb-9500-4e06-956e-a1f1037d6496)

In case of consumer group *group-1*,
```
group-1 consists of 2 consumers
Each of them subscribe/listen to one of the partitions. (Load is distributed)
In this case, each of the partitions act like a single queue.
```

Whereas, in case of group *group-2*,
```
group-2 has only one consumer
So, it subscribes/listens to messages from both the partitions
```

> RabbitMQ also attempted this.

Each Partition is consumed by only one consumer in a group 
So, ``` Number of consumers in a group <= Number of Partitions ```

So, a partition starts acting like a queue for one consumer in a group.
To act like pub sub, put each consumer in a unique group


#### Distributed system:
We can have leader and follower brokers. 
But how do we know which broker is leader and which is follower.
But this happens at partition level. Not at broker level.

This is managed by zookeeper.



### Docker Setup:
```
docker run --name zookeeper  -p 2181:2181 -d zookeeper
```

```
docker run -p 9092:9092 --name kafka -e KAFKA_ZOOKEEPER_CONNECT=<IP>:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<IP>:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 -d confluentinc/cp-kafka
```
