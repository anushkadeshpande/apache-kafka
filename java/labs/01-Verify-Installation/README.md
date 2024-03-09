### Exec into kafka container:
```bash
docker-compose exec kafka bash
```

### To create a new topic:
```bash
kafka-topics.sh --bootstrap-server :9092 --create  --replication-factor 1 --partitions 1 --topic helloworld
```

### To list all topics created:
```bash
kafka-topics.sh --bootstrap-server :9092 --list
```

### To start producing messages:
```bash
kafka-console-producer.sh --bootstrap-server :9092 --topic helloworld
```

### To start consumer:
```bash
kafka-console-consumer.sh --bootstrap-server :9092 --topic helloworld
```

But this will not give historical messages. Adding the `--from-beginning` flag does the job.
```bash
kafka-console-consumer.sh --bootstrap-server :9092 --topic helloworld --from-beginning
```

Consumer continuously keeps polling for data.

And typically, the consumers consume the messages after a delay of 1s.

