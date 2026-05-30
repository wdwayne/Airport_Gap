| Test ID    | Endpoint                    | Scenario                       | Expected Result             |
| ---------- | --------------------------- | ------------------------------ | --------------------------- |
| AG-TC-001  | POST  /auth                 | Valid login                    | Token returned              |
| AG-TC-002  | POST  /auth                 | Invalid credentials            | 401 Status code             |
| AG-TC-003  | GET   /airports             | Retrieve airports              | List of airports returned   |
| AG-TC-004  | GET   /airports:id          | Retrieve airport by ID         | 200 airport returned        |
| AG-TC-005  | POST  /favorites            | create favorite                | 201 returned                |
| AG-TC-006  | GET   /favorites            | retrieve favorites             | 200 returned                |
| AG-TC-007  | GET   /favorites/:id        | retrieve favorite by id        | 200 returned                |
| AG-TC-008  | POST  /airports/distance    | retrieve airport distance      | 200 returned                |
| AG-TC-009  | PATCH /favorites/:id        | edit favorite                  | 200 returned                |
| AG-TC-010  | GET   /airports?page        | get other airport pages        | 200 returned                |
| AG-TC-011  | DELETE /favorites/:id       | delete favorite by id          | 200 returned                |
| AG-TC-012  | DELETE /favorites/clear_all | clear favorites                | 200 returned                |