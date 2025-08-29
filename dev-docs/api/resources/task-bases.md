# /task-bases
- **POST** `/task-bases`
  - Request Body: TaskBase
    ```json
    {
        "label":  "string",
        "user":  {
                 },
        "asset":  {
                  },
        "meter":  {
                  }
    }
    ```
  - Response Body: TaskBase
    ```json
    {
        "label":  "string",
        "user":  {
                 },
        "asset":  {
                  },
        "meter":  {
                  }
    }
    ```
- **DELETE** `/task-bases/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/task-bases/{id}`
  - Response Body: TaskBase
    ```json
    {
        "label":  "string",
        "user":  {
                 },
        "asset":  {
                  },
        "meter":  {
                  }
    }
    ```
- **PATCH** `/task-bases/{id}`
  - Request Body: TaskBasePatchDTO
    ```json
    {
        "title":  "string"
    }
    ```
  - Response Body: TaskBase
    ```json
    {
        "label":  "string",
        "user":  {
                 },
        "asset":  {
                  },
        "meter":  {
                  }
    }
    ```
