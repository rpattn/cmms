# /currencies
- **GET** `/currencies`
  - Response Body: Collection<Currency>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "name":  "string",
                          "code":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/currencies`
  - Request Body: Currency
    ```json
    {
        "id":  1,
        "name":  "string",
        "code":  "string"
    }
    ```
  - Response Body: Currency
    ```json
    {
        "id":  1,
        "name":  "string",
        "code":  "string"
    }
    ```
- **DELETE** `/currencies/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/currencies/{id}`
  - Response Body: Currency
    ```json
    {
        "id":  1,
        "name":  "string",
        "code":  "string"
    }
    ```
- **PATCH** `/currencies/{id}`
  - Request Body: CurrencyPatchDTO
    ```json
    {
        "name":  "string",
        "code":  "string"
    }
    ```
  - Response Body: Currency
    ```json
    {
        "id":  1,
        "name":  "string",
        "code":  "string"
    }
    ```
