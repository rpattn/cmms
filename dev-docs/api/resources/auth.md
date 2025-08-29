# /auth
- **DELETE** `/auth/{username}`
  - Response Body: String
    ```json
    "string"
    ```
- **GET** `/auth/{username}`
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
- **GET** `/auth/activate-account`

- **GET** `/auth/me`
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
- **GET** `/auth/refresh`
  - Response Body: AuthResponse
    ```json
    {
        "accessToken":  "string"
    }
    ```
- **GET** `/auth/resetpwd`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/auth/reset-pwd-confirm`

- **POST** `/auth/sendMail`
  - Request Body: UserSignupRequest
    ```json
    {
        "email":  "string",
        "password":  "string",
        "role":  {
                 },
        "firstName":  "string",
        "lastName":  "string",
        "phone":  "string",
        "companyName":  "string",
        "employeesCount":  1,
        "language":  {
                     },
        "subscriptionPlanId":  "string"
    }
    ```
- **POST** `/auth/signin`
  - Request Body: UserLoginRequest
    ```json
    {
        "email":  "string",
        "password":  "string",
        "type":  "string"
    }
    ```
  - Response Body: AuthResponse
    ```json
    {
        "accessToken":  "string"
    }
    ```
- **POST** `/auth/signup`
  - Request Body: UserSignupRequest
    ```json
    {
        "email":  "string",
        "password":  "string",
        "role":  {
                 },
        "firstName":  "string",
        "lastName":  "string",
        "phone":  "string",
        "companyName":  "string",
        "employeesCount":  1,
        "language":  {
                     },
        "subscriptionPlanId":  "string"
    }
    ```
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/auth/switch-account`
  - Response Body: AuthResponse
    ```json
    {
        "accessToken":  "string"
    }
    ```
- **POST** `/auth/updatepwd`
  - Request Body: UpdatePasswordRequest
    ```json
    {
        "oldPassword":  "string",
        "newPassword":  "string"
    }
    ```
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
