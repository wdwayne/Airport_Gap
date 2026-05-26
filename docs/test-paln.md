# Test Plan Overview
This test plan outlines the test approach and methods used in testing the Airport Gap API. The Airport Gap API provides access to a database of airports, calculates distances between airports, and allows you to save your favorite airports to your user account.

# Objectives
1. Verify that core functionalities work as expected.
2. Observe system behavior under valid and invalid inputs
3. Search for and document potential vulnerabilities and defects

# Test Scope
*In Scope*
- Authentication
- CRUD functionalities
- Performance testing 
- Validation 
- Security

*Out Of Scope*
- Third party integration
- Database validation

# Test Stratagy
Tests were conducted using the following methods:
1. Exploritory Testing 
2. Negative Testing
3. Security Testing
4. Automation Testing
5. Functional Testing
6. Response Validation

# Test deliverables
- HTML Reports
- Test Cases
- Screenshots

# Risk and Mitigation
Risk: Unathenticated access to protected end points
Mitigation: perform security tests  to ensure users are not allowed access to protected end points

# Entry and Exit Criteria

## Entry Criteria
- Valid email address
- Authentication Token
- An HTTP Client

## Exit Criteria
- All End Points tested
- All Deliverables complete