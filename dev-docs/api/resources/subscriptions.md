# /subscriptions
- **GET** `/subscriptions`
  - Response Body: Collection<Subscription>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "usersCount":  1,
                          "monthly":  true,
                          "cancelled":  true,
                          "activated":  true,
                          "fastSpringId":  "string",
                          "subscriptionPlan":  {
                                               },
                          "startsOn":  "2024-01-01T00:00:00Z",
                          "endsOn":  "2024-01-01T00:00:00Z",
                          "downgradeNeeded":  true,
                          "upgradeNeeded":  true
                      }
                  ],
        "Count":  1
    }
    ```
- **DELETE** `/subscriptions/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **POST** `/subscriptions/downgrade`
  - Request Body: Collection<Long>
    ```json
    {
        "value":  [
                      1
                  ],
        "Count":  1
    }
    ```
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **POST** `/subscriptions/request-upgrade`
  - Request Body: SubscriptionChangeRequest
    ```json
    {
        "id":  1,
        "code":  "string",
        "monthly":  true,
        "usersCount":  1
    }
    ```
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **POST** `/subscriptions/upgrade`
  - Request Body: Collection<Long>
    ```json
    {
        "value":  [
                      1
                  ],
        "Count":  1
    }
    ```
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
