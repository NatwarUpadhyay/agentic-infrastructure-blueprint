package com.enterprise.hooks;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
@RequestMapping("/api/tickets")
public class HooksApplication {

    public static void main(String[] args) {
        SpringApplication.run(HooksApplication.class, args);
    }

    @PostMapping
    public String createITSMTicket(@RequestBody String payload) {
        // Mock method simulating legacy ITSM integration (e.g. ServiceNow/Jira)
        System.out.println("Received compliance/audit incident hook: " + payload);
        return "{\"status\": \"Ticket Created\", \"id\": \"INC-99081\"}";
    }
}
