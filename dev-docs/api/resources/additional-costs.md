# /additional-costs
- **POST** `/additional-costs`
  - Request Body: AdditionalCost
    ```json
    {
        "id":  1,
        "description":  "string",
        "assignedTo":  {
                       },
        "includeToTotalCost":  true,
        "date":  "2024-01-01T00:00:00Z",
        "workOrder":  {
                      }
    }
    ```
  - Response Body: AdditionalCost
    ```json
    {
        "id":  1,
        "description":  "string",
        "assignedTo":  {
                       },
        "includeToTotalCost":  true,
        "date":  "2024-01-01T00:00:00Z",
        "workOrder":  {
                      }
    }
    ```
- **DELETE** `/additional-costs/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/additional-costs/{id}`
  - Response Body: AdditionalCost
    ```json
    {
        "id":  1,
        "description":  "string",
        "assignedTo":  {
                       },
        "includeToTotalCost":  true,
        "date":  "2024-01-01T00:00:00Z",
        "workOrder":  {
                      }
    }
    ```
- **PATCH** `/additional-costs/{id}`
  - Request Body: AdditionalCostPatchDTO
    ```json
    {
        "description":  "string",
        "assignedTo":  {
                       },
        "cost":  1
    }
    ```
  - Response Body: AdditionalCost
    ```json
    {
        "id":  1,
        "description":  "string",
        "assignedTo":  {
                       },
        "includeToTotalCost":  true,
        "date":  "2024-01-01T00:00:00Z",
        "workOrder":  {
                      }
    }
    ```
- **GET** `/additional-costs/work-order/{id}`
  - Response Body: Collection<AdditionalCost>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "description":  "string",
                          "assignedTo":  {
                                         },
                          "includeToTotalCost":  true,
                          "date":  "2024-01-01T00:00:00Z",
                          "workOrder":  {
                                        }
                      }
                  ],
        "Count":  1
    }
    ```
