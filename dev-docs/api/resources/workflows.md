# /workflows
- **GET** `/workflows`
  - Response Body: Collection<Workflow>
    ```json
    {
        "value":  [
                      {
                          "title":  "string",
                          "mainCondition":  {
                                            },
                          "action":  {
                                     }
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/workflows`
  - Request Body: WorkflowPostDTO
    ```json
    {
        "title":  "string",
        "mainCondition":  {
                          },
        "action":  {
                   }
    }
    ```
  - Response Body: Workflow
    ```json
    {
        "title":  "string",
        "mainCondition":  {
                          },
        "action":  {
                   }
    }
    ```
- **DELETE** `/workflows/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/workflows/{id}`
  - Response Body: Workflow
    ```json
    {
        "title":  "string",
        "mainCondition":  {
                          },
        "action":  {
                   }
    }
    ```
- **PATCH** `/workflows/{id}`
  - Request Body: WorkflowPostDTO
    ```json
    {
        "title":  "string",
        "mainCondition":  {
                          },
        "action":  {
                   }
    }
    ```
  - Response Body: Workflow
    ```json
    {
        "title":  "string",
        "mainCondition":  {
                          },
        "action":  {
                   }
    }
    ```
