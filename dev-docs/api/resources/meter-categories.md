# /meter-categories
- **GET** `/meter-categories`
  - Response Body: Collection<MeterCategory>
    ```json
    {
        "value":  [
                      {
                          "id":  1
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/meter-categories`
  - Request Body: MeterCategory
    ```json
    {
        "id":  1
    }
    ```
  - Response Body: MeterCategory
    ```json
    {
        "id":  1
    }
    ```
- **DELETE** `/meter-categories/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/meter-categories/{id}`
  - Response Body: MeterCategory
    ```json
    {
        "id":  1
    }
    ```
- **PATCH** `/meter-categories/{id}`
  - Request Body: CategoryPatchDTO
    ```json
    {
        "name":  "string",
        "description":  "string"
    }
    ```
  - Response Body: MeterCategory
    ```json
    {
        "id":  1
    }
    ```
