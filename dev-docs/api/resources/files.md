# /files
- **DELETE** `/files/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/files/{id}`
  - Response Body: FileShowDTO
    ```json
    {
        "name":  "string",
        "url":  "string"
    }
    ```
- **PATCH** `/files/{id}`
  - Request Body: FilePatchDTO
    ```json
    {
        "name":  "string"
    }
    ```
  - Response Body: FileShowDTO
    ```json
    {
        "name":  "string",
        "url":  "string"
    }
    ```
- **GET** `/files/download/privacy-policy`
  - Response Body: byte[]
    ```json
    "value"
    ```
- **GET** `/files/download/tos`
  - Response Body: byte[]
    ```json
    "value"
    ```
- **POST** `/files/search`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<FileShowDTO>>
    ```json
    "value"
    ```
- **POST** `/files/upload`
  - Response Body: List<FileShowDTO>
    ```json
    {
        "value":  [
                      {
                          "name":  "string",
                          "url":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
