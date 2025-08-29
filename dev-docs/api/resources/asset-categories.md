# /asset-categories
- **GET** `/asset-categories`
  - Response Body: Collection<AssetCategory>
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
- **POST** `/asset-categories`
  - Request Body: AssetCategory
    ```json
    {
        "id":  1
    }
    ```
  - Response Body: AssetCategory
    ```json
    {
        "id":  1
    }
    ```
- **DELETE** `/asset-categories/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/asset-categories/{id}`
  - Response Body: AssetCategory
    ```json
    {
        "id":  1
    }
    ```
- **PATCH** `/asset-categories/{id}`
  - Request Body: CategoryPatchDTO
    ```json
    {
        "name":  "string",
        "description":  "string"
    }
    ```
  - Response Body: AssetCategory
    ```json
    {
        "id":  1
    }
    ```
