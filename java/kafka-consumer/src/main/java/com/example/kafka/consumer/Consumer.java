package com.example.kafka.consumer;

import java.util.Collections;
import java.util.Properties;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;

public class Consumer {
	public static void main(String args[]){
		Properties kafkaProps = new Properties();
		kafkaProps.put("bootstrap.servers", "localhost:9093,localhost:9094");
		kafkaProps.put("group.id","group-1");
		kafkaProps.put("key.deserializer","org.apache.kafka.common.serialization.StringDeserializer");
		kafkaProps.put("value.deserializer","org.apache.kafka.common.serialization.StringDeserializer");		
		
		KafkaConsumer<String, String> consumer = new KafkaConsumer<String,String>(kafkaProps);		
		consumer.subscribe(Collections.singletonList("test"));
		try {
			int i=0;
			System.out.println("----------- Started Polling For Data ----------- ");
			while (i < 2000) {
				 i++;
				 ConsumerRecords<String, String> records = consumer.poll(100);				 
				 for (ConsumerRecord<String, String> record : records){
					 System.out.printf("Partition = %d, offset = %d, key = %s, value = %s%n", 
						record.partition(), record.offset(), record.key(), record.value());
				 }
			 }
			 System.out.println("----------- Completed Polling ----------- ");
			consumer.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

		 }
	 
