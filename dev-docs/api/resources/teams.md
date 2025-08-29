# /teams
- **POST** `/teams`
  - Request Body: Team
    ```json
    {
        "name":  "string",
        "description":  "string"
    }
    ```
  - Response Body: TeamShowDTO
    ```json
    {
    }
    ```
- **DELETE** `/teams/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/teams/{id}`
  - Response Body: TeamShowDTO
    ```json
    {
    }
    ```
- **PATCH** `/teams/{id}`
  - Request Body: TeamPatchDTO
    ```json
    {
    }
    ```
  - Response Body: TeamShowDTO
    ```json
    {
    }
    ```
- **GET** `/teams/mini`
  - Response Body: Collection<TeamMiniDTO>
    ```json
    {
        "value":  [
                      {
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/teams/search`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<TeamShowDTO>>
    ```json
    "value"
    ```
