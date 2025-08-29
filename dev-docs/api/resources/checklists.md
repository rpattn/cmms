# /checklists
- **GET** `/checklists`
  - Response Body: Collection<Checklist>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "name":  "string",
                          "description":  "string",
                          "category":  "string",
                          "companySettings":  {
                                              }
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/checklists`
  - Request Body: ChecklistPostDTO
    ```json
    {
        "name":  "string",
        "description":  "string",
        "taskBases":  {
                      },
        "category":  "string",
        "companySettings":  {
                            }
    }
    ```
  - Response Body: Checklist
    ```json
    {
        "id":  1,
        "name":  "string",
        "description":  "string",
        "category":  "string",
        "companySettings":  {
                            }
    }
    ```
- **DELETE** `/checklists/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/checklists/{id}`
  - Response Body: Checklist
    ```json
    {
        "id":  1,
        "name":  "string",
        "description":  "string",
        "category":  "string",
        "companySettings":  {
                            }
    }
    ```
- **PATCH** `/checklists/{id}`
  - Request Body: ChecklistPatchDTO
    ```json
    {
        "name":  "string",
        "description":  "string",
        "taskBases":  {
                      },
        "category":  "string"
    }
    ```
  - Response Body: Checklist
    ```json
    {
        "id":  1,
        "name":  "string",
        "description":  "string",
        "category":  "string",
        "companySettings":  {
                            }
    }
    ```
