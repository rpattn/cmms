# /customers
- **POST** `/customers`
  - Request Body: Customer
    ```json
    {
        "id":  1,
        "customerType":  "string",
        "description":  "string",
        "rate":  1,
        "billingName":  "string",
        "billingAddress":  "string",
        "billingAddress2":  "string",
        "billingCurrency":  {
                            }
    }
    ```
  - Response Body: Customer
    ```json
    {
        "id":  1,
        "customerType":  "string",
        "description":  "string",
        "rate":  1,
        "billingName":  "string",
        "billingAddress":  "string",
        "billingAddress2":  "string",
        "billingCurrency":  {
                            }
    }
    ```
- **DELETE** `/customers/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/customers/{id}`
  - Response Body: Customer
    ```json
    {
        "id":  1,
        "customerType":  "string",
        "description":  "string",
        "rate":  1,
        "billingName":  "string",
        "billingAddress":  "string",
        "billingAddress2":  "string",
        "billingCurrency":  {
                            }
    }
    ```
- **PATCH** `/customers/{id}`
  - Request Body: CustomerPatchDTO
    ```json
    {
        "vendorType":  "string",
        "description":  "string",
        "rate":  1,
        "billingName":  "string",
        "billingAddress":  "string",
        "billingAddress2":  "string",
        "billingCurrency":  {
                            }
    }
    ```
  - Response Body: Customer
    ```json
    {
        "id":  1,
        "customerType":  "string",
        "description":  "string",
        "rate":  1,
        "billingName":  "string",
        "billingAddress":  "string",
        "billingAddress2":  "string",
        "billingCurrency":  {
                            }
    }
    ```
- **GET** `/customers/mini`
  - Response Body: Collection<CustomerMiniDTO>
    ```json
    {
        "value":  [
                      {
                          "name":  "string",
                          "id":  1
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/customers/search`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<Customer>>
    ```json
    "value"
    ```
