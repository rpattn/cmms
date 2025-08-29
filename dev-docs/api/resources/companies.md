# /companies
- **GET** `/companies/{id}`
  - Response Body: CompanyShowDTO
    ```json
    {
        "name":  "string",
        "address":  "string",
        "phone":  "string",
        "website":  "string",
        "email":  "string",
        "employeesCount":  1,
        "logo":  {
                 },
        "city":  "string",
        "state":  "string",
        "zipCode":  "string",
        "subscription":  {
                         },
        "companySettings":  {
                            }
    }
    ```
- **PATCH** `/companies/{id}`
  - Request Body: CompanyPatchDTO
    ```json
    {
        "name":  "string",
        "address":  "string",
        "phone":  "string",
        "website":  "string",
        "email":  "string",
        "logo":  {
                 },
        "city":  "string",
        "state":  "string",
        "zipCode":  "string"
    }
    ```
  - Response Body: CompanyShowDTO
    ```json
    {
        "name":  "string",
        "address":  "string",
        "phone":  "string",
        "website":  "string",
        "email":  "string",
        "employeesCount":  1,
        "logo":  {
                 },
        "city":  "string",
        "state":  "string",
        "zipCode":  "string",
        "subscription":  {
                         },
        "companySettings":  {
                            }
    }
    ```
