# /field-configurations
- **PATCH** `/field-configurations/{id}`
  - Request Body: FieldConfigurationPatchDTO
    ```json
    {
        "fieldType":  {
                      }
    }
    ```
  - Response Body: FieldConfiguration
    ```json
    {
        "id":  1,
        "fieldName":  "string",
        "workOrderRequestConfiguration":  {
                                          },
        "workOrderConfiguration":  {
                                   }
    }
    ```
