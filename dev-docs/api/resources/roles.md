# /roles
- **GET** `/roles`
  - Response Body: Collection<Role>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "roleType":  {
                                       },
                          "paid":  true,
                          "name":  "string",
                          "description":  "string",
                          "externalId":  "string",
                          "companySettings":  {
                                              }
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/roles`
  - Request Body: Role
    ```json
    {
        "id":  1,
        "roleType":  {
                     },
        "paid":  true,
        "name":  "string",
        "description":  "string",
        "externalId":  "string",
        "companySettings":  {
                            }
    }
    ```
  - Response Body: Role
    ```json
    {
        "id":  1,
        "roleType":  {
                     },
        "paid":  true,
        "name":  "string",
        "description":  "string",
        "externalId":  "string",
        "companySettings":  {
                            }
    }
    ```
- **DELETE** `/roles/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/roles/{id}`
  - Response Body: Role
    ```json
    {
        "id":  1,
        "roleType":  {
                     },
        "paid":  true,
        "name":  "string",
        "description":  "string",
        "externalId":  "string",
        "companySettings":  {
                            }
    }
    ```
- **PATCH** `/roles/{id}`
  - Request Body: RolePatchDTO
    ```json
    {
        "name":  "string",
        "description":  "string",
        "externalId":  "string",
        "createPermissions":  {
                              },
        "viewPermissions":  {
                            },
        "viewOtherPermissions":  {
                                 },
        "editOtherPermissions":  {
                                 },
        "deleteOtherPermissions":  {
                                   }
    }
    ```
  - Response Body: Role
    ```json
    {
        "id":  1,
        "roleType":  {
                     },
        "paid":  true,
        "name":  "string",
        "description":  "string",
        "externalId":  "string",
        "companySettings":  {
                            }
    }
    ```
