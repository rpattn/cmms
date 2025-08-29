# /labors
- **POST** `/labors`
  - Request Body: Labor
    ```json
    {
        "id":  1,
        "assignedTo":  {
                       },
        "hourlyRate":  1,
        "startedAt":  "2024-01-01T00:00:00Z",
        "timeCategory":  {
                         },
        "workOrder":  {
                      }
    }
    ```
  - Response Body: Labor
    ```json
    {
        "id":  1,
        "assignedTo":  {
                       },
        "hourlyRate":  1,
        "startedAt":  "2024-01-01T00:00:00Z",
        "timeCategory":  {
                         },
        "workOrder":  {
                      }
    }
    ```
- **DELETE** `/labors/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/labors/{id}`
  - Response Body: Labor
    ```json
    {
        "id":  1,
        "assignedTo":  {
                       },
        "hourlyRate":  1,
        "startedAt":  "2024-01-01T00:00:00Z",
        "timeCategory":  {
                         },
        "workOrder":  {
                      }
    }
    ```
- **PATCH** `/labors/{id}`
  - Request Body: LaborPatchDTO
    ```json
    {
        "assignedTo":  {
                       },
        "includeToTotalTime":  true,
        "hourlyRate":  1,
        "duration":  1,
        "startedAt":  "2024-01-01T00:00:00Z",
        "timeCategory":  {
                         }
    }
    ```
  - Response Body: Labor
    ```json
    {
        "id":  1,
        "assignedTo":  {
                       },
        "hourlyRate":  1,
        "startedAt":  "2024-01-01T00:00:00Z",
        "timeCategory":  {
                         },
        "workOrder":  {
                      }
    }
    ```
- **GET** `/labors/work-order/{id}`
  - Response Body: Collection<Labor>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "assignedTo":  {
                                         },
                          "hourlyRate":  1,
                          "startedAt":  "2024-01-01T00:00:00Z",
                          "timeCategory":  {
                                           },
                          "workOrder":  {
                                        }
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/labors/work-order/{id}`
  - Response Body: Labor
    ```json
    {
        "id":  1,
        "assignedTo":  {
                       },
        "hourlyRate":  1,
        "startedAt":  "2024-01-01T00:00:00Z",
        "timeCategory":  {
                         },
        "workOrder":  {
                      }
    }
    ```
