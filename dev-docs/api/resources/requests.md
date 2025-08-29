# /requests
- **POST** `/requests`
  - Request Body: Request
    ```json
    {
        "id":  1,
        "customId":  "string",
        "cancelled":  true,
        "cancellationReason":  "string",
        "audioDescription":  {
                             },
        "workOrder":  {
                      }
    }
    ```
  - Response Body: RequestShowDTO
    ```json
    {
        "cancelled":  true,
        "cancellationReason":  "string",
        "workOrder":  {
                      },
        "audioDescription":  {
                             },
        "customId":  "string"
    }
    ```
- **DELETE** `/requests/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/requests/{id}`
  - Response Body: RequestShowDTO
    ```json
    {
        "cancelled":  true,
        "cancellationReason":  "string",
        "workOrder":  {
                      },
        "audioDescription":  {
                             },
        "customId":  "string"
    }
    ```
- **PATCH** `/requests/{id}`
  - Request Body: RequestPatchDTO
    ```json
    {
        "cancelled":  true,
        "audioDescription":  {
                             }
    }
    ```
  - Response Body: RequestShowDTO
    ```json
    {
        "cancelled":  true,
        "cancellationReason":  "string",
        "workOrder":  {
                      },
        "audioDescription":  {
                             },
        "customId":  "string"
    }
    ```
- **PATCH** `/requests/{id}/approve`
  - Request Body: RequestApproveDTO
    ```json
    {
        "assetStatus":  {
                        }
    }
    ```
  - Response Body: WorkOrderShowDTO
    ```json
    {
        "completedBy":  {
                        },
        "completedOn":  "2024-01-01T00:00:00Z",
        "archived":  true,
        "parentRequest":  {
                          },
        "parentPreventiveMaintenance":  {
                                        },
        "signature":  {
                      },
        "status":  {
                   },
        "feedback":  "string",
        "audioDescription":  {
                             },
        "customId":  "string"
    }
    ```
- **PATCH** `/requests/{id}/cancel`
  - Response Body: RequestShowDTO
    ```json
    {
        "cancelled":  true,
        "cancellationReason":  "string",
        "workOrder":  {
                      },
        "audioDescription":  {
                             },
        "customId":  "string"
    }
    ```
- **GET** `/requests/pending`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **POST** `/requests/search`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<RequestShowDTO>>
    ```json
    "value"
    ```
