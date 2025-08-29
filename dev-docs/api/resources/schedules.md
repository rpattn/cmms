# /schedules
- **GET** `/schedules`
  - Response Body: Collection<Schedule>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "disabled":  true,
                          "endsOn":  "2024-01-01T00:00:00Z",
                          "dueDateDelay":  1,
                          "preventiveMaintenance":  {
                                                    }
                      }
                  ],
        "Count":  1
    }
    ```
- **DELETE** `/schedules/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/schedules/{id}`
  - Response Body: Schedule
    ```json
    {
        "id":  1,
        "disabled":  true,
        "endsOn":  "2024-01-01T00:00:00Z",
        "dueDateDelay":  1,
        "preventiveMaintenance":  {
                                  }
    }
    ```
- **PATCH** `/schedules/{id}`
  - Request Body: SchedulePatchDTO
    ```json
    {
        "startsOn":  "2024-01-01T00:00:00Z",
        "frequency":  1,
        "endsOn":  "2024-01-01T00:00:00Z",
        "dueDateDelay":  1
    }
    ```
  - Response Body: Schedule
    ```json
    {
        "id":  1,
        "disabled":  true,
        "endsOn":  "2024-01-01T00:00:00Z",
        "dueDateDelay":  1,
        "preventiveMaintenance":  {
                                  }
    }
    ```
