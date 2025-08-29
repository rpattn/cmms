# /time-categories
- **GET** `/time-categories`
  - Response Body: Collection<TimeCategory>
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
- **POST** `/time-categories`
  - Request Body: TimeCategory
    ```json
    {
        "id":  1
    }
    ```
  - Response Body: TimeCategory
    ```json
    {
        "id":  1
    }
    ```
- **DELETE** `/time-categories/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/time-categories/{id}`
  - Response Body: TimeCategory
    ```json
    {
        "id":  1
    }
    ```
- **PATCH** `/time-categories/{id}`
  - Request Body: CategoryPatchDTO
    ```json
    {
        "name":  "string",
        "description":  "string"
    }
    ```
  - Response Body: TimeCategory
    ```json
    {
        "id":  1
    }
    ```
