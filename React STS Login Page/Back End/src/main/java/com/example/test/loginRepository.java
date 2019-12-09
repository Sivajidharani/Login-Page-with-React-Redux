package com.example.test;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface loginRepository extends MongoRepository<login, String> { 

}
