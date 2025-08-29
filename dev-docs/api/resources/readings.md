# /readings
- **POST** `/readings`
  - Request Body: Reading
    ```json
    {
        "id":  1,
        "value":  1,
        "meter":  {
                  }
    }
    ```
  - Response Body: Reading
    ```json
    {
        "id":  1,
        "value":  1,
        "meter":  {
                  }
    }
    ```
- **DELETE** `/readings/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **PATCH** `/readings/{id}`
  - Request Body: ReadingPatchDTO
    ```json
    {
        "value":  "string",
        "meter":  {
                  }
    }
    ```
  - Response Body: Reading
    ```json
    {
        "id":  1,
        "value":  1,
        "meter":  {
                  }
    }
    ```
- **GET** `/readings/meter/{id}`
  - Response Body: Collection<Reading>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "value":  1,
                          "meter":  {
                                    }
                      }
                  ],
        "Count":  1
    }
    ```
