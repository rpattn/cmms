# /floor-plans
- **POST** `/floor-plans`
  - Request Body: FloorPlan
    ```json
    {
        "id":  1,
        "name":  "string",
        "image":  {
                  },
        "area":  1,
        "location":  {
                     }
    }
    ```
  - Response Body: FloorPlanShowDTO
    ```json
    {
        "id":  1,
        "name":  "string",
        "image":  {
                  },
        "area":  1
    }
    ```
- **DELETE** `/floor-plans/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/floor-plans/{id}`
  - Response Body: FloorPlanShowDTO
    ```json
    {
        "id":  1,
        "name":  "string",
        "image":  {
                  },
        "area":  1
    }
    ```
- **PATCH** `/floor-plans/{id}`
  - Request Body: FloorPlanPatchDTO
    ```json
    {
        "name":  "string",
        "image":  {
                  },
        "area":  1
    }
    ```
  - Response Body: FloorPlanShowDTO
    ```json
    {
        "id":  1,
        "name":  "string",
        "image":  {
                  },
        "area":  1
    }
    ```
- **GET** `/floor-plans/location/{id}`
  - Response Body: Collection<FloorPlanShowDTO>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "name":  "string",
                          "image":  {
                                    },
                          "area":  1
                      }
                  ],
        "Count":  1
    }
    ```
