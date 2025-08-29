# /cost-categories
- **GET** `/cost-categories`
  - Response Body: Collection<CostCategory>
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
- **POST** `/cost-categories`
  - Request Body: CostCategory
    ```json
    {
        "id":  1
    }
    ```
  - Response Body: CostCategory
    ```json
    {
        "id":  1
    }
    ```
- **DELETE** `/cost-categories/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/cost-categories/{id}`
  - Response Body: CostCategory
    ```json
    {
        "id":  1
    }
    ```
- **PATCH** `/cost-categories/{id}`
  - Request Body: CategoryPatchDTO
    ```json
    {
        "name":  "string",
        "description":  "string"
    }
    ```
  - Response Body: CostCategory
    ```json
    {
        "id":  1
    }
    ```
