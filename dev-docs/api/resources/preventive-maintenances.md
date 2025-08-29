# /preventive-maintenances
- **POST** `/preventive-maintenances`
  - Request Body: PreventiveMaintenancePostDTO
    ```json
    {
        "startsOn":  "2024-01-01T00:00:00Z",
        "name":  "string",
        "frequency":  1,
        "dueDateDelay":  1,
        "endsOn":  "2024-01-01T00:00:00Z"
    }
    ```
  - Response Body: PreventiveMaintenanceShowDTO
    ```json
    {
        "name":  "string",
        "schedule":  {
                     },
        "customId":  "string"
    }
    ```
- **DELETE** `/preventive-maintenances/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/preventive-maintenances/{id}`
  - Response Body: PreventiveMaintenanceShowDTO
    ```json
    {
        "name":  "string",
        "schedule":  {
                     },
        "customId":  "string"
    }
    ```
- **PATCH** `/preventive-maintenances/{id}`
  - Request Body: PreventiveMaintenancePatchDTO
    ```json
    {
        "name":  "string"
    }
    ```
  - Response Body: PreventiveMaintenanceShowDTO
    ```json
    {
        "name":  "string",
        "schedule":  {
                     },
        "customId":  "string"
    }
    ```
- **POST** `/preventive-maintenances/search`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<PreventiveMaintenanceShowDTO>>
    ```json
    "value"
    ```
