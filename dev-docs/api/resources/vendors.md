# /vendors
- **POST** `/vendors`
  - Request Body: Vendor
    ```json
    {
        "id":  1,
        "vendorType":  "string",
        "companyName":  "string",
        "description":  "string",
        "rate":  1
    }
    ```
  - Response Body: Vendor
    ```json
    {
        "id":  1,
        "vendorType":  "string",
        "companyName":  "string",
        "description":  "string",
        "rate":  1
    }
    ```
- **DELETE** `/vendors/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/vendors/{id}`
  - Response Body: Vendor
    ```json
    {
        "id":  1,
        "vendorType":  "string",
        "companyName":  "string",
        "description":  "string",
        "rate":  1
    }
    ```
- **PATCH** `/vendors/{id}`
  - Request Body: VendorPatchDTO
    ```json
    {
        "vendorType":  "string",
        "description":  "string",
        "rate":  1
    }
    ```
  - Response Body: Vendor
    ```json
    {
        "id":  1,
        "vendorType":  "string",
        "companyName":  "string",
        "description":  "string",
        "rate":  1
    }
    ```
- **GET** `/vendors/mini`
  - Response Body: Collection<VendorMiniDTO>
    ```json
    {
        "value":  [
                      {
                          "companyName":  "string",
                          "id":  1
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/vendors/search`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<Vendor>>
    ```json
    "value"
    ```
