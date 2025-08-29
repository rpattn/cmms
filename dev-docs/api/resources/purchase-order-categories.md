# /purchase-order-categories
- **GET** `/purchase-order-categories`
  - Response Body: Collection<PurchaseOrderCategory>
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
- **POST** `/purchase-order-categories`
  - Request Body: PurchaseOrderCategory
    ```json
    {
        "id":  1
    }
    ```
  - Response Body: PurchaseOrderCategory
    ```json
    {
        "id":  1
    }
    ```
- **DELETE** `/purchase-order-categories/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/purchase-order-categories/{id}`
  - Response Body: PurchaseOrderCategory
    ```json
    {
        "id":  1
    }
    ```
- **PATCH** `/purchase-order-categories/{id}`
  - Request Body: CategoryPatchDTO
    ```json
    {
        "name":  "string",
        "description":  "string"
    }
    ```
  - Response Body: PurchaseOrderCategory
    ```json
    {
        "id":  1
    }
    ```
