# /deprecations
- **POST** `/deprecations`
  - Request Body: Deprecation
    ```json
    {
        "purchasePrice":  1,
        "purchaseDate":  "2024-01-01T00:00:00Z",
        "residualValue":  "string",
        "usefulLIfe":  "string",
        "rate":  1,
        "currentValue":  1
    }
    ```
  - Response Body: Deprecation
    ```json
    {
        "purchasePrice":  1,
        "purchaseDate":  "2024-01-01T00:00:00Z",
        "residualValue":  "string",
        "usefulLIfe":  "string",
        "rate":  1,
        "currentValue":  1
    }
    ```
- **DELETE** `/deprecations/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/deprecations/{id}`
  - Response Body: Deprecation
    ```json
    {
        "purchasePrice":  1,
        "purchaseDate":  "2024-01-01T00:00:00Z",
        "residualValue":  "string",
        "usefulLIfe":  "string",
        "rate":  1,
        "currentValue":  1
    }
    ```
- **PATCH** `/deprecations/{id}`
  - Request Body: DeprecationPatchDTO
    ```json
    {
        "purchasePrice":  1,
        "purchaseDate":  "2024-01-01T00:00:00Z",
        "residualValue":  "string",
        "usefulLIfe":  "string",
        "rate":  1,
        "currentValue":  1
    }
    ```
  - Response Body: Deprecation
    ```json
    {
        "purchasePrice":  1,
        "purchaseDate":  "2024-01-01T00:00:00Z",
        "residualValue":  "string",
        "usefulLIfe":  "string",
        "rate":  1,
        "currentValue":  1
    }
    ```
