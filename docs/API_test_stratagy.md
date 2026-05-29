# Test Stratagy - Airport Gap API

## Project Overview
The focus of this project is to run automated tests on the Airport Gap API using Postman and Newman.
The aim of this project to validate core functionalities of this API such as retrieving a list of airports, calculating the distance between airports, authentication and CRUD functionalities.

---

# Scope
The following endpoints were tested:
- GET /airports
- GET /airports/?page=int
- GET /airports/:id
- POST /airports/distance
- POST /tokens
- GET /favorites
- GET /favorites/:id
- POST /favorites
- PATCH /favorites:id
- DELETE /favorites/:id
- DELETE /favorites/clear_all

---

# Testing Objective
The objective of this project was to verify the following functionalities
- AUthentication functionality
- Viewing all airports
- List pagination
- Calculate airport distances
- Create favorite airports
- Edit favorite airports
- Retrieve favorite airport lists
- Delete from favorites
- Security 
- Proper status codes
- Error validation

---

# Testing Types Performed 

## Functional Testing
Examples:
- Checking the distance between two airports
- Updating favorites list

## Negative Testing
Examples:
- Making requests to protected endpoints without auth
- Attempting to calculate airport distances without airport IDs

## Response Validation
Validated
- Status codes
- Response body structure 
- Response Header structure
Examples:
- JSON data returned after a request is made
- Contents of the headers returned when a request is made

## Performance Validation
Basic perfermance to check API return in a reasonable time

# Authentication Stratagy 
Authenticcation the Airport Gap API was handled via Bearer Authentication inorder to make a request to a protected endpoint a token must be added top the Authentication header.

# Test Data Management
Data was managed using Postman environment variables.

# Automation Strategy
Automation was implemented using:
- Postman test scripts
- JavaScript assertions
- Newman CLI execution
Assertions validated:
- Status codes
- Response structures
- Response values
- Performance expectations
- Invalid requests

# Risk and Mitigation
Risk: Unathenticated access to protected end points
Mitigation: perform security tests  to ensure users are not allowed access to protected end points

# Tools Used
- Postman
- Newman
- JavaScript
- GitHub
- GitHub Actions

# Conclusion
This project demonstrates:
- API functional testing
- Automated API validation
- Authentication handling
- Positive and negative test coverage
- Basic automation workflow integration
- Secuirity testing
