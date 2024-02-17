package com.example.training.kafka_producer;

import java.util.Properties;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerRecord;

public class TestProducer {
	public static void main(String args[]) throws Exception{
		Properties props = new Properties();
		props.put("bootstrap.servers", "localhost:9093,localhost:9094");
		props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
		props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
		
		Producer<String, String> producer = new KafkaProducer<>(props);
		
		for (int i = 0; i < 5; i++){
			ProducerRecord record = new ProducerRecord<String, String>("test", Integer.toString(i), "Value: " + Integer.toString(i)); //Number 'i' is key, and "Value: i" is message data
			producer.send(record);			
		}
		producer.close();
	}


}
