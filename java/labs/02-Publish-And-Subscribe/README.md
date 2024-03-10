## Steps to run:
1. Create topics `global-events` and `user-events`
```
kafka-topics.sh --bootstrap-server :9092 --create --topic global-events

kafka-topics.sh --bootstrap-server :9092 --create --topic user-events
```

2. Build producer code and consumer codes
```
mvn clean package
```

3. Run producer code:
```
java -jar .\target\pubsub-producer-1.0.0-SNAPSHOT.jar
```

4. Run consumer code:
```
 java -jar .\target\pubsub-consumer-1.0.0-SNAPSHOT.jar
```

#### Observations:
When 
```java
  producer.flush();
```
is present, producer took 5-6 s to write messages.

But when it is removed, it took 2-3 s to write messages.