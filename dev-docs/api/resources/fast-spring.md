# /fast-spring
- **GET** `/fast-spring/cancel`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **POST** `/fast-spring/deactivate`
  - Request Body: WebhookPayload<DeactivatedPayload>
    ```json
    "value"
    ```
- **POST** `/fast-spring/new-subscription`
  - Request Body: WebhookPayload<com.grash.dto.fastSpring.payloads.SubscriptionPayload>
    ```json
    {
        "product":  {
                    }
    }
    ```
- **POST** `/fast-spring/renew-subscription`
  - Request Body: WebhookPayload<SubscriptionCharge>
    ```json
    "value"
    ```
- **GET** `/fast-spring/resume`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
