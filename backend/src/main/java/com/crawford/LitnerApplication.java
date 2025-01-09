package com.crawford;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.crawford.model")
public class LitnerApplication {

	public static void main(String[] args) {
		SpringApplication.run(LitnerApplication.class, args);
	}

}
