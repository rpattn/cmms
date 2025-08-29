# /general-preferences
- **GET** `/general-preferences`
  - Response Body: Collection<GeneralPreferences>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "currency":  {
                                       },
                          "timeZone":  "string",
                          "autoAssignWorkOrders":  true,
                          "autoAssignRequests":  true,
                          "disableClosedWorkOrdersNotif":  true,
                          "simplifiedWorkOrder":  true,
                          "companySettings":  {
                                              }
                      }
                  ],
        "Count":  1
    }
    ```
- **GET** `/general-preferences/{id}`
  - Response Body: GeneralPreferences
    ```json
    {
        "id":  1,
        "currency":  {
                     },
        "timeZone":  "string",
        "autoAssignWorkOrders":  true,
        "autoAssignRequests":  true,
        "disableClosedWorkOrdersNotif":  true,
        "simplifiedWorkOrder":  true,
        "companySettings":  {
                            }
    }
    ```
- **PATCH** `/general-preferences/{id}`
  - Request Body: GeneralPreferencesPatchDTO
    ```json
    {
        "language":  {
                     },
        "currency":  {
                     },
        "businessType":  {
                         },
        "dateFormat":  {
                       },
        "timeZone":  "string",
        "autoAssignWorkOrders":  true,
        "autoAssignRequests":  true,
        "disableClosedWorkOrdersNotif":  true,
        "askFeedBackOnWOClosed":  true,
        "laborCostInTotalCost":  true,
        "woUpdateForRequesters":  true,
        "simplifiedWorkOrder":  true,
        "daysBeforePrevMaintNotification":  1
    }
    ```
  - Response Body: GeneralPreferences
    ```json
    {
        "id":  1,
        "currency":  {
                     },
        "timeZone":  "string",
        "autoAssignWorkOrders":  true,
        "autoAssignRequests":  true,
        "disableClosedWorkOrdersNotif":  true,
        "simplifiedWorkOrder":  true,
        "companySettings":  {
                            }
    }
    ```
