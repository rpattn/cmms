# /work-order-meter-triggers
- **POST** `/work-order-meter-triggers`
  - Request Body: WorkOrderMeterTrigger
    ```json
    {
        "id":  1,
        "recurrent":  true,
        "name":  "string",
        "triggerCondition":  {
                             },
        "value":  1,
        "waitBefore":  1,
        "meter":  {
                  }
    }
    ```
  - Response Body: WorkOrderMeterTrigger
    ```json
    {
        "id":  1,
        "recurrent":  true,
        "name":  "string",
        "triggerCondition":  {
                             },
        "value":  1,
        "waitBefore":  1,
        "meter":  {
                  }
    }
    ```
- **DELETE** `/work-order-meter-triggers/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/work-order-meter-triggers/{id}`
  - Response Body: WorkOrderMeterTrigger
    ```json
    {
        "id":  1,
        "recurrent":  true,
        "name":  "string",
        "triggerCondition":  {
                             },
        "value":  1,
        "waitBefore":  1,
        "meter":  {
                  }
    }
    ```
- **PATCH** `/work-order-meter-triggers/{id}`
  - Request Body: WorkOrderMeterTriggerPatchDTO
    ```json
    {
        "recurrent":  true,
        "name":  "string",
        "triggerCondition":  {
                             },
        "value":  1,
        "waitBefore":  1
    }
    ```
  - Response Body: WorkOrderMeterTriggerShowDTO
    ```json
    {
        "recurrent":  true,
        "name":  "string",
        "triggerCondition":  {
                             },
        "value":  1,
        "waitBefore":  1
    }
    ```
- **GET** `/work-order-meter-triggers/meter/{id}`
  - Response Body: Collection<WorkOrderMeterTriggerShowDTO>
    ```json
    {
        "value":  [
                      {
                          "recurrent":  true,
                          "name":  "string",
                          "triggerCondition":  {
                                               },
                          "value":  1,
                          "waitBefore":  1
                      }
                  ],
        "Count":  1
    }
    ```
