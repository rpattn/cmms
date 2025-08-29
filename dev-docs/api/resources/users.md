# /users
- **GET** `/users/{id}`
  - Response Body: UserResponseDTO
    ```json
    {
        "id":  1,
        "username":  "string",
        "email":  "string",
        "role":  {
                 },
        "rate":  1,
        "jobTitle":  "string",
        "firstName":  "string",
        "lastName":  "string",
        "phone":  "string",
        "ownsCompany":  true,
        "companyId":  1,
        "companySettingsId":  1,
        "userSettingsId":  1,
        "image":  {
                  },
        "parentSuperAccount":  {
                               },
        "enabled":  true,
        "enabledInSubscription":  true,
        "uiConfiguration":  {
                            },
        "lastLogin":  "2024-01-01T00:00:00Z"
    }
    ```
- **PATCH** `/users/{id}`
  - Request Body: UserPatchDTO
    ```json
    {
        "firstName":  "string",
        "lastName":  "string",
        "rate":  1,
        "phone":  "string",
        "jobTitle":  "string",
        "location":  {
                     },
        "image":  {
                  },
        "newPassword":  "string"
    }
    ```
  - Response Body: UserResponseDTO
    ```json
    {
        "id":  1,
        "username":  "string",
        "email":  "string",
        "role":  {
                 },
        "rate":  1,
        "jobTitle":  "string",
        "firstName":  "string",
        "lastName":  "string",
        "phone":  "string",
        "ownsCompany":  true,
        "companyId":  1,
        "companySettingsId":  1,
        "userSettingsId":  1,
        "image":  {
                  },
        "parentSuperAccount":  {
                               },
        "enabled":  true,
        "enabledInSubscription":  true,
        "uiConfiguration":  {
                            },
        "lastLogin":  "2024-01-01T00:00:00Z"
    }
    ```
- **PATCH** `/users/{id}/disable`
  - Response Body: UserResponseDTO
    ```json
    {
        "id":  1,
        "username":  "string",
        "email":  "string",
        "role":  {
                 },
        "rate":  1,
        "jobTitle":  "string",
        "firstName":  "string",
        "lastName":  "string",
        "phone":  "string",
        "ownsCompany":  true,
        "companyId":  1,
        "companySettingsId":  1,
        "userSettingsId":  1,
        "image":  {
                  },
        "parentSuperAccount":  {
                               },
        "enabled":  true,
        "enabledInSubscription":  true,
        "uiConfiguration":  {
                            },
        "lastLogin":  "2024-01-01T00:00:00Z"
    }
    ```
- **PATCH** `/users/{id}/role`
  - Response Body: UserResponseDTO
    ```json
    {
        "id":  1,
        "username":  "string",
        "email":  "string",
        "role":  {
                 },
        "rate":  1,
        "jobTitle":  "string",
        "firstName":  "string",
        "lastName":  "string",
        "phone":  "string",
        "ownsCompany":  true,
        "companyId":  1,
        "companySettingsId":  1,
        "userSettingsId":  1,
        "image":  {
                  },
        "parentSuperAccount":  {
                               },
        "enabled":  true,
        "enabledInSubscription":  true,
        "uiConfiguration":  {
                            },
        "lastLogin":  "2024-01-01T00:00:00Z"
    }
    ```
- **POST** `/users/invite`
  - Request Body: UserInvitationDTO
    ```json
    {
        "role":  {
                 }
    }
    ```
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/users/mini`
  - Response Body: Collection<UserMiniDTO>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "firstName":  "string",
                          "lastName":  "string",
                          "image":  {
                                    },
                          "phone":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **GET** `/users/mini/disabled`
  - Response Body: Collection<UserMiniDTO>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "firstName":  "string",
                          "lastName":  "string",
                          "image":  {
                                    },
                          "phone":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/users/search`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<UserResponseDTO>>
    ```json
    "value"
    ```
