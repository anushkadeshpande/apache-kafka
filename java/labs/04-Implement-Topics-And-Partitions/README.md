### Steps:

1. Create topics `device-event` and `device-heartbeat`
```
kafka-topics.sh --bootstrap-server :9092 --create --replication-factor 1 --partitions 1 --topic device-event
```
```
kafka-topics.sh --bootstrap-server :9092 --create --replication-factor 1 --partitions 1 --topic device-heartbeat
```

2. Start consumer
```
kafka-console-consumer.sh --bootstrap-server :9092 --topic device-event
```

3. Build device-simulator code and run it
    It'll produce data rapidly

4. Build device-monitor code and run it
    It'll collect and transform the data produced by device-simulator

This is what we can observe:

![image](https://github.com/anushkadeshpande/apache-kafka/assets/53345232/99a2612c-be39-4f21-81c8-f3c6103597a3)
> 1. Console consumer
> 2. device-monitor
> 3. device-simulator
