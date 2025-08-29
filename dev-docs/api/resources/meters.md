# /meters
- **POST** `/meters`
  - Request Body: Meter
    ```json
    {
        "name":  "string",
        "unit":  "string",
        "updateFrequency":  1,
        "meterCategory":  {
                          },
        "image":  {
                  },
        "location":  {
                     },
        "asset":  {
                  }
    }
    ```
  - Response Body: MeterShowDTO
    ```json
    {
        "name":  "string",
        "unit":  "string",
        "updateFrequency":  1,
        "meterCategory":  {
                          },
        "image":  {
                  },
        "location":  {
                     },
        "asset":  {
                  },
        "lastReading":  "2024-01-01T00:00:00Z",
        "nextReading":  "2024-01-01T00:00:00Z"
    }
    ```
- **DELETE** `/meters/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/meters/{id}`
  - Response Body: MeterShowDTO
    ```json
    {
        "name":  "string",
        "unit":  "string",
        "updateFrequency":  1,
        "meterCategory":  {
                          },
        "image":  {
                  },
        "location":  {
                     },
        "asset":  {
                  },
        "lastReading":  "2024-01-01T00:00:00Z",
        "nextReading":  "2024-01-01T00:00:00Z"
    }
    ```
- **PATCH** `/meters/{id}`
  - Request Body: MeterPatchDTO
    ```json
    {
        "name":  "string",
        "unit":  "string",
        "updateFrequency":  1,
        "meterCategory":  {
                          },
        "image":  {
                  },
        "location":  {
                     },
        "users":  {
                  }
    }
    ```
  - Response Body: MeterShowDTO
    ```json
    {
        "name":  "string",
        "unit":  "string",
        "updateFrequency":  1,
        "meterCategory":  {
                          },
        "image":  {
                  },
        "location":  {
                     },
        "asset":  {
                  },
        "lastReading":  "2024-01-01T00:00:00Z",
        "nextReading":  "2024-01-01T00:00:00Z"
    }
    ```
- **GET** `/meters/asset/{id}`
  - Response Body: Collection<MeterShowDTO>
    ```json
    {
        "value":  [
                      {
                          "name":  "string",
                          "unit":  "string",
                          "updateFrequency":  1,
                          "meterCategory":  {
                                            },
                          "image":  {
                                    },
                          "location":  {
                                       },
                          "asset":  {
                                    },
                          "lastReading":  "2024-01-01T00:00:00Z",
                          "nextReading":  "2024-01-01T00:00:00Z"
                      }
                  ],
        "Count":  1
    }
    ```
- **GET** `/meters/mini`
  - Response Body: Collection<MeterMiniDTO>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "name":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/meters/search`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<MeterShowDTO>>
    ```json
    "value"
    ```
