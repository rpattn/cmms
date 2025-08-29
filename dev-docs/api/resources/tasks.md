# /tasks
- **DELETE** `/tasks/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/tasks/{id}`
  - Response Body: TaskShowDTO
    ```json
    {
        "taskBase":  {
                     },
        "notes":  "string",
        "value":  "string"
    }
    ```
- **PATCH** `/tasks/{id}`
  - Request Body: TaskPatchDTO
    ```json
    {
        "status":  {
                   },
        "notes":  "string",
        "value":  "string"
    }
    ```
  - Response Body: TaskShowDTO
    ```json
    {
        "taskBase":  {
                     },
        "notes":  "string",
        "value":  "string"
    }
    ```
- **GET** `/tasks/preventive-maintenance/{id}`
  - Response Body: Collection<Task>
    ```json
    {
        "value":  [
                      {
                          "taskBase":  {
                                       },
                          "notes":  "string",
                          "value":  "string",
                          "workOrder":  {
                                        },
                          "preventiveMaintenance":  {
                                                    }
                      }
                  ],
        "Count":  1
    }
    ```
- **PATCH** `/tasks/preventive-maintenance/{id}`
  - Request Body: Collection<TaskBaseDTO>
    ```json
    {
        "value":  [
                      {
                          "label":  "string",
                          "user":  {
                                   },
                          "asset":  {
                                    },
                          "meter":  {
                                    },
                          "options":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
  - Response Body: Collection<TaskShowDTO>
    ```json
    {
        "value":  [
                      {
                          "taskBase":  {
                                       },
                          "notes":  "string",
                          "value":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **GET** `/tasks/work-order/{id}`
  - Response Body: Collection<TaskShowDTO>
    ```json
    {
        "value":  [
                      {
                          "taskBase":  {
                                       },
                          "notes":  "string",
                          "value":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **PATCH** `/tasks/work-order/{id}`
  - Request Body: Collection<TaskBaseDTO>
    ```json
    {
        "value":  [
                      {
                          "label":  "string",
                          "user":  {
                                   },
                          "asset":  {
                                    },
                          "meter":  {
                                    },
                          "options":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
  - Response Body: Collection<TaskShowDTO>
    ```json
    {
        "value":  [
                      {
                          "taskBase":  {
                                       },
                          "notes":  "string",
                          "value":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
