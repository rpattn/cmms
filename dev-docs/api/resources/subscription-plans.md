# /subscription-plans
- **GET** `/subscription-plans`
  - Response Body: Collection<SubscriptionPlan>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "name":  "string",
                          "monthlyCostPerUser":  1,
                          "yearlyCostPerUser":  1,
                          "code":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/subscription-plans`
  - Request Body: SubscriptionPlan
    ```json
    {
        "id":  1,
        "name":  "string",
        "monthlyCostPerUser":  1,
        "yearlyCostPerUser":  1,
        "code":  "string"
    }
    ```
  - Response Body: SubscriptionPlan
    ```json
    {
        "id":  1,
        "name":  "string",
        "monthlyCostPerUser":  1,
        "yearlyCostPerUser":  1,
        "code":  "string"
    }
    ```
- **DELETE** `/subscription-plans/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/subscription-plans/{id}`
  - Response Body: SubscriptionPlan
    ```json
    {
        "id":  1,
        "name":  "string",
        "monthlyCostPerUser":  1,
        "yearlyCostPerUser":  1,
        "code":  "string"
    }
    ```
- **PATCH** `/subscription-plans/{id}`
  - Request Body: SubscriptionPlanPatchDTO
    ```json
    {
        "name":  "string",
        "monthlyCostPerUser":  1,
        "yearlyCostPerUser":  1,
        "code":  "string",
        "features":  {
                     }
    }
    ```
  - Response Body: SubscriptionPlan
    ```json
    {
        "id":  1,
        "name":  "string",
        "monthlyCostPerUser":  1,
        "yearlyCostPerUser":  1,
        "code":  "string"
    }
    ```
