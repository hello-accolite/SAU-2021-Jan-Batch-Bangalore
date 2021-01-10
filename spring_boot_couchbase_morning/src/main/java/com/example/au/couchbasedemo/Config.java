package com.example.au.couchbasedemo;

import java.util.Collections;
import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.couchbase.config.AbstractCouchbaseConfiguration;

@Configuration
public class Config extends AbstractCouchbaseConfiguration {
    
    @Override
    public String getBucketName() {
        return "aditya";
    }
    
	@Override
	public String getConnectionString() {
		return "127.0.0.1";
		//return "localhost";
	}


	@Override
	public String getPassword() {
		return "####";
	}

	@Override
	public String getUserName() {
		return "Aditya";
	}
}
