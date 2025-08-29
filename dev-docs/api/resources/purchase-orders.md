# /purchase-orders
- **POST** `/purchase-orders`
  - Request Body: PurchaseOrder
    ```json
    {
        "name":  "string",
        "category":  {
                     },
        "shippingDueDate":  "2024-01-01T00:00:00Z",
        "shippingAdditionalDetail":  "string",
        "shippingShipToName":  "string",
        "shippingCompanyName":  "string",
        "shippingAddress":  "string",
        "shippingCity":  "string",
        "shippingState":  "string",
        "shippingZipCode":  "string",
        "shippingPhone":  "string",
        "shippingFax":  "string",
        "additionalInfoDate":  "2024-01-01T00:00:00Z",
        "additionalInfoRequisitionedName":  "string",
        "additionalInfoShippingOrderCategory":  "string",
        "additionalInfoTerm":  "string",
        "additionalInfoNotes":  "string",
        "vendor":  {
                   }
    }
    ```
  - Response Body: PurchaseOrderShowDTO
    ```json
    {
        "name":  "string",
        "category":  {
                     },
        "shippingDueDate":  "2024-01-01T00:00:00Z",
        "shippingAdditionalDetail":  "string",
        "shippingShipToName":  "string",
        "shippingCompanyName":  "string",
        "shippingAddress":  "string",
        "shippingCity":  "string",
        "shippingState":  "string",
        "shippingZipCode":  "string",
        "shippingPhone":  "string",
        "shippingFax":  "string",
        "additionalInfoDate":  "2024-01-01T00:00:00Z",
        "additionalInfoRequisitionedName":  "string",
        "additionalInfoShippingOrderCategory":  "string",
        "additionalInfoTerm":  "string",
        "additionalInfoNotes":  "string",
        "vendor":  {
                   },
        "partQuantities":  {
                           }
    }
    ```
- **DELETE** `/purchase-orders/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/purchase-orders/{id}`
  - Response Body: PurchaseOrderShowDTO
    ```json
    {
        "name":  "string",
        "category":  {
                     },
        "shippingDueDate":  "2024-01-01T00:00:00Z",
        "shippingAdditionalDetail":  "string",
        "shippingShipToName":  "string",
        "shippingCompanyName":  "string",
        "shippingAddress":  "string",
        "shippingCity":  "string",
        "shippingState":  "string",
        "shippingZipCode":  "string",
        "shippingPhone":  "string",
        "shippingFax":  "string",
        "additionalInfoDate":  "2024-01-01T00:00:00Z",
        "additionalInfoRequisitionedName":  "string",
        "additionalInfoShippingOrderCategory":  "string",
        "additionalInfoTerm":  "string",
        "additionalInfoNotes":  "string",
        "vendor":  {
                   },
        "partQuantities":  {
                           }
    }
    ```
- **PATCH** `/purchase-orders/{id}`
  - Request Body: PurchaseOrderPatchDTO
    ```json
    {
        "name":  "string",
        "category":  {
                     },
        "shippingDueDate":  "2024-01-01T00:00:00Z",
        "shippingAdditionalDetail":  "string",
        "shippingShipToName":  "string",
        "shippingCompanyName":  "string",
        "shippingAddress":  "string",
        "shippingCity":  "string",
        "shippingState":  "string",
        "shippingZipCode":  "string",
        "shippingPhone":  "string",
        "shippingFax":  "string",
        "additionalInfoDate":  "2024-01-01T00:00:00Z",
        "additionalInfoRequisitionedName":  "string",
        "additionalInfoShippingOrderCategory":  "string",
        "additionalInfoTerm":  "string",
        "additionalInfoNotes":  "string",
        "vendor":  {
                   }
    }
    ```
  - Response Body: PurchaseOrderShowDTO
    ```json
    {
        "name":  "string",
        "category":  {
                     },
        "shippingDueDate":  "2024-01-01T00:00:00Z",
        "shippingAdditionalDetail":  "string",
        "shippingShipToName":  "string",
        "shippingCompanyName":  "string",
        "shippingAddress":  "string",
        "shippingCity":  "string",
        "shippingState":  "string",
        "shippingZipCode":  "string",
        "shippingPhone":  "string",
        "shippingFax":  "string",
        "additionalInfoDate":  "2024-01-01T00:00:00Z",
        "additionalInfoRequisitionedName":  "string",
        "additionalInfoShippingOrderCategory":  "string",
        "additionalInfoTerm":  "string",
        "additionalInfoNotes":  "string",
        "vendor":  {
                   },
        "partQuantities":  {
                           }
    }
    ```
- **PATCH** `/purchase-orders/{id}/respond`
  - Response Body: PurchaseOrderShowDTO
    ```json
    {
        "name":  "string",
        "category":  {
                     },
        "shippingDueDate":  "2024-01-01T00:00:00Z",
        "shippingAdditionalDetail":  "string",
        "shippingShipToName":  "string",
        "shippingCompanyName":  "string",
        "shippingAddress":  "string",
        "shippingCity":  "string",
        "shippingState":  "string",
        "shippingZipCode":  "string",
        "shippingPhone":  "string",
        "shippingFax":  "string",
        "additionalInfoDate":  "2024-01-01T00:00:00Z",
        "additionalInfoRequisitionedName":  "string",
        "additionalInfoShippingOrderCategory":  "string",
        "additionalInfoTerm":  "string",
        "additionalInfoNotes":  "string",
        "vendor":  {
                   },
        "partQuantities":  {
                           }
    }
    ```
- **POST** `/purchase-orders/search`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<PurchaseOrderShowDTO>>
    ```json
    "value"
    ```
