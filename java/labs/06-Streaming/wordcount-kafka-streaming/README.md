### Steps:
1. Run the docker container
```
docker-compose -f kafka-streaming.yaml up
```

2. Create topics `stream-input` and `stream-output`
```bash
docker-compose -f .\kafka-streaming.yaml exec kafka bash
```

```
> kafka-topics.sh --create --bootstrap-server :9092 --topic stream-input
> kafka-topics.sh --create --bootstrap-server :9092 --topic stream-output
```


3. Start console consumer
```
kafka-console-consumer.sh --bootstrap-server :9092 --topic stream-output --from-beginning --property print.key=true
```

4. Build and package the code and run it
```
> mvn clean package
> 
```


![image](https://github.com/anushkadeshpande/apache-kafka/assets/53345232/214befeb-2836-4dee-b627-90739d22b30c)
