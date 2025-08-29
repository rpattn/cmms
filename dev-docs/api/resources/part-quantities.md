# /part-quantities
- **POST** `/part-quantities`
  - Request Body: PartQuantity
    ```json
    {
        "quantity":  1,
        "part":  {
                 },
        "purchaseOrder":  {
                          },
        "workOrder":  {
                      }
    }
    ```
  - Response Body: PartQuantityShowDTO
    ```json
    {
        "quantity":  1,
        "part":  {
                 }
    }
    ```
- **DELETE** `/part-quantities/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/part-quantities/{id}`
  - Response Body: PartQuantityShowDTO
    ```json
    {
        "quantity":  1,
        "part":  {
                 }
    }
    ```
- **PATCH** `/part-quantities/{id}`
  - Request Body: PartQuantityPatchDTO
    ```json
    {
        "quantity":  1
    }
    ```
  - Response Body: PartQuantityShowDTO
    ```json
    {
        "quantity":  1,
        "part":  {
                 }
    }
    ```
- **GET** `/part-quantities/purchase-order/{id}`
  - Response Body: Collection<PartQuantityShowDTO>
    ```json
    {
        "value":  [
                      {
                          "quantity":  1,
                          "part":  {
                                   }
                      }
                  ],
        "Count":  1
    }
    ```
- **PATCH** `/part-quantities/purchase-order/{id}`
  - Request Body: List<PartQuantityCompletePatchDTO>
    ```json
    {
        "value":  [
                      {
                          "quantity":  1,
                          "part":  {
                                   }
                      }
                  ],
        "Count":  1
    }
    ```
  - Response Body: Collection<PartQuantityShowDTO>
    ```json
    {
        "value":  [
                      {
                          "quantity":  1,
                          "part":  {
                                   }
                      }
                  ],
        "Count":  1
    }
    ```
- **GET** `/part-quantities/work-order/{id}`
  - Response Body: Collection<PartQuantityShowDTO>
    ```json
    {
        "value":  [
                      {
                          "quantity":  1,
                          "part":  {
                                   }
                      }
                  ],
        "Count":  1
    }
    ```
- **PATCH** `/part-quantities/work-order/{id}`
  - Request Body: List<Long>
    ```json
    {
        "value":  [
                      1
                  ],
        "Count":  1
    }
    ```
  - Response Body: Collection<PartQuantityShowDTO>
    ```json
    {
        "value":  [
                      {
                          "quantity":  1,
                          "part":  {
                                   }
                      }
                  ],
        "Count":  1
    }
    ```
