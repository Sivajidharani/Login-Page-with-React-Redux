package com.example.test;


import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface contactrepository extends MongoRepository<contact, String> {
	@Query("{ 'UserName' : ?0 }")
    Optional<contact> findByUserName(String userName);

}
