## Steps to run:
1. Build producer code and consumer codes
```
mvn clean package
```

2. Run producer code:
```
java -jar .\target\pubsub-producer-1.0.0-SNAPSHOT.jar
```

3. Run consumer code:
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