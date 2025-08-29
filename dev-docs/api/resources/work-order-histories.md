# /work-order-histories
- **GET** `/work-order-histories/{id}`
  - Response Body: WorkOrderHistoryShowDTO
    ```json
    {
        "name":  "string",
        "user":  {
                 }
    }
    ```
- **GET** `/work-order-histories/work-order/{id}`
  - Response Body: Collection<WorkOrderHistoryShowDTO>
    ```json
    {
        "value":  [
                      {
                          "name":  "string",
                          "user":  {
                                   }
                      }
                  ],
        "Count":  1
    }
    ```
