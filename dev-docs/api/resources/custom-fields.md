# /custom-fields
- **POST** `/custom-fields`
  - Request Body: CustomField
    ```json
    {
        "id":  1,
        "name":  "string",
        "value":  "string",
        "vendor":  {
                   }
    }
    ```
  - Response Body: CustomField
    ```json
    {
        "id":  1,
        "name":  "string",
        "value":  "string",
        "vendor":  {
                   }
    }
    ```
- **DELETE** `/custom-fields/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/custom-fields/{id}`
  - Response Body: CustomField
    ```json
    {
        "id":  1,
        "name":  "string",
        "value":  "string",
        "vendor":  {
                   }
    }
    ```
- **PATCH** `/custom-fields/{id}`
  - Request Body: CustomFieldPatchDTO
    ```json
    {
        "name":  "string",
        "value":  "string"
    }
    ```
  - Response Body: CustomField
    ```json
    {
        "id":  1,
        "name":  "string",
        "value":  "string",
        "vendor":  {
                   }
    }
    ```
