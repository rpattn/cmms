# /part-categories
- **GET** `/part-categories`
  - Response Body: Collection<PartCategory>
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
- **POST** `/part-categories`
  - Request Body: PartCategory
    ```json
    {
        "id":  1
    }
    ```
  - Response Body: PartCategory
    ```json
    {
        "id":  1
    }
    ```
- **DELETE** `/part-categories/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/part-categories/{id}`
  - Response Body: PartCategory
    ```json
    {
        "id":  1
    }
    ```
- **PATCH** `/part-categories/{id}`
  - Request Body: CategoryPatchDTO
    ```json
    {
        "name":  "string",
        "description":  "string"
    }
    ```
  - Response Body: PartCategory
    ```json
    {
        "id":  1
    }
    ```
