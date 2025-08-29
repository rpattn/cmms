# /work-order-categories
- **GET** `/work-order-categories`
  - Response Body: Collection<WorkOrderCategory>
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
- **POST** `/work-order-categories`
  - Request Body: WorkOrderCategory
    ```json
    {
        "id":  1
    }
    ```
  - Response Body: WorkOrderCategory
    ```json
    {
        "id":  1
    }
    ```
- **DELETE** `/work-order-categories/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/work-order-categories/{id}`
  - Response Body: WorkOrderCategory
    ```json
    {
        "id":  1
    }
    ```
- **PATCH** `/work-order-categories/{id}`
  - Request Body: CategoryPatchDTO
    ```json
    {
        "name":  "string",
        "description":  "string"
    }
    ```
  - Response Body: WorkOrderCategory
    ```json
    {
        "id":  1
    }
    ```
