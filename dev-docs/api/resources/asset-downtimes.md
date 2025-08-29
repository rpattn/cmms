# /asset-downtimes
- **POST** `/asset-downtimes`
  - Request Body: AssetDowntime
    ```json
    {
        "asset":  {
                  },
        "startsOn":  "2024-01-01T00:00:00Z"
    }
    ```
  - Response Body: AssetDowntime
    ```json
    {
        "asset":  {
                  },
        "startsOn":  "2024-01-01T00:00:00Z"
    }
    ```
- **DELETE** `/asset-downtimes/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/asset-downtimes/{id}`
  - Response Body: AssetDowntime
    ```json
    {
        "asset":  {
                  },
        "startsOn":  "2024-01-01T00:00:00Z"
    }
    ```
- **PATCH** `/asset-downtimes/{id}`
  - Request Body: AssetDowntimePatchDTO
    ```json
    {
        "duration":  1,
        "startsOn":  "2024-01-01T00:00:00Z"
    }
    ```
  - Response Body: AssetDowntime
    ```json
    {
        "asset":  {
                  },
        "startsOn":  "2024-01-01T00:00:00Z"
    }
    ```
- **GET** `/asset-downtimes/asset/{id}`
  - Response Body: Collection<AssetDowntime>
    ```json
    {
        "value":  [
                      {
                          "asset":  {
                                    },
                          "startsOn":  "2024-01-01T00:00:00Z"
                      }
                  ],
        "Count":  1
    }
    ```
