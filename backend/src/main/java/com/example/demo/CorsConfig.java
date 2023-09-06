package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.convert.*;
import org.springframework.data.mongodb.core.mapping.MongoMappingContext;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://192.168.1.50:3000")
                .allowedMethods("GET", "POST")
                .allowCredentials(true);
    }
}

@Configuration
@EnableMongoAuditing
public class MongoConfig {

    @Configuration
    @EnableMongoAuditing
    public class MongoConfig {

        @Bean
        public MappingMongoConverter mappingMongoConverter(MongoMappingContext context, MongoTemplate mongoTemplate) {
            MappingMongoConverter converter = new MappingMongoConverter((DbRefResolver) new DefaultMongoTypeMapper(null), context);
            converter.setMongoMappingContext(context);
            converter.setTypeMapper(customTypeMapper());

            return converter;
        }

        @Bean
        public MongoTemplate mongoTemplate(MongoMappingContext context) {
            return new MongoTemplate(new CustomMongoDbFactory(), mappingMongoConverter(context, null));
        }

        @Bean
        public MongoTypeMapper customTypeMapper() {
            return new DefaultMongoTypeMapper(null); // Esta configuración elimina el atributo _class
        }
    }
}

