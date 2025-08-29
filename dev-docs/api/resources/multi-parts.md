# /multi-parts
- **GET** `/multi-parts`
  - Response Body: Collection<MultiPartsShowDTO>
    ```json
    {
        "value":  [
                      {
                          "name":  "string",
                          "parts":  {
                                    }
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/multi-parts`
  - Request Body: MultiParts
    ```json
    {
        "name":  "string"
    }
    ```
  - Response Body: MultiPartsShowDTO
    ```json
    {
        "name":  "string",
        "parts":  {
                  }
    }
    ```
- **DELETE** `/multi-parts/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/multi-parts/{id}`
  - Response Body: MultiPartsShowDTO
    ```json
    {
        "name":  "string",
        "parts":  {
                  }
    }
    ```
- **PATCH** `/multi-parts/{id}`
  - Request Body: MultiPartsPatchDTO
    ```json
    {
        "name":  "string",
        "parts":  {
                  }
    }
    ```
  - Response Body: MultiPartsShowDTO
    ```json
    {
        "name":  "string",
        "parts":  {
                  }
    }
    ```
- **GET** `/multi-parts/mini`
  - Response Body: Collection<MultiPartsMiniDTO>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "name":  "string",
                          "parts":  {
                                    }
                      }
                  ],
        "Count":  1
    }
    ```
