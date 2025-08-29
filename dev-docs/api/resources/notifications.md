# /notifications
- **GET** `/notifications`
  - Response Body: Collection<Notification>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "message":  "string",
                          "seen":  true,
                          "user":  {
                                   },
                          "notificationType":  {
                                               },
                          "resourceId":  1
                      }
                  ],
        "Count":  1
    }
    ```
- **GET** `/notifications/{id}`
  - Response Body: Notification
    ```json
    {
        "id":  1,
        "message":  "string",
        "seen":  true,
        "user":  {
                 },
        "notificationType":  {
                             },
        "resourceId":  1
    }
    ```
- **PATCH** `/notifications/{id}`
  - Request Body: NotificationPatchDTO
    ```json
    {
        "seen":  true
    }
    ```
  - Response Body: Notification
    ```json
    {
        "id":  1,
        "message":  "string",
        "seen":  true,
        "user":  {
                 },
        "notificationType":  {
                             },
        "resourceId":  1
    }
    ```
- **POST** `/notifications/push-token`
  - Request Body: PushTokenPayload
    ```json
    {
        "token":  "string"
    }
    ```
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/notifications/read-all`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **POST** `/notifications/search`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<Notification>>
    ```json
    "value"
    ```
