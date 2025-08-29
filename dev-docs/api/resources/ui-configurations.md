# /ui-configurations
- **PATCH** `/ui-configurations`
  - Request Body: UiConfigurationPatchDTO
    ```json
    {
        "requests":  true,
        "locations":  true,
        "meters":  true,
        "vendorsAndCustomers":  true
    }
    ```
  - Response Body: UiConfiguration
    ```json
    {
        "id":  1,
        "companySettings":  {
                            }
    }
    ```
