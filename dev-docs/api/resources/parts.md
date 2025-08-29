# /parts
- **POST** `/parts`
  - Request Body: Part
    ```json
    {
        "name":  "string",
        "cost":  1,
        "barcode":  "string",
        "description":  "string",
        "category":  {
                     },
        "quantity":  1,
        "area":  "string",
        "additionalInfos":  "string",
        "nonStock":  true,
        "image":  {
                  },
        "minQuantity":  1,
        "unit":  "string"
    }
    ```
  - Response Body: PartShowDTO
    ```json
    {
        "name":  "string",
        "cost":  1,
        "category":  {
                     },
        "nonStock":  true,
        "barcode":  "string",
        "description":  "string",
        "quantity":  1,
        "additionalInfos":  "string",
        "area":  "string",
        "minQuantity":  1,
        "location":  {
                     },
        "image":  {
                  },
        "assignedTo":  {
                       },
        "files":  {
                  },
        "customers":  {
                      },
        "vendors":  {
                    },
        "teams":  {
                  },
        "unit":  "string"
    }
    ```
- **DELETE** `/parts/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/parts/{id}`
  - Response Body: PartShowDTO
    ```json
    {
        "name":  "string",
        "cost":  1,
        "category":  {
                     },
        "nonStock":  true,
        "barcode":  "string",
        "description":  "string",
        "quantity":  1,
        "additionalInfos":  "string",
        "area":  "string",
        "minQuantity":  1,
        "location":  {
                     },
        "image":  {
                  },
        "assignedTo":  {
                       },
        "files":  {
                  },
        "customers":  {
                      },
        "vendors":  {
                    },
        "teams":  {
                  },
        "unit":  "string"
    }
    ```
- **PATCH** `/parts/{id}`
  - Request Body: PartPatchDTO
    ```json
    {
        "name":  "string",
        "cost":  1,
        "category":  {
                     },
        "nonStock":  true,
        "barcode":  "string",
        "description":  "string",
        "quantity":  1,
        "additionalInfos":  "string",
        "area":  "string",
        "minQuantity":  1,
        "location":  {
                     },
        "image":  {
                  },
        "assignedTo":  {
                       },
        "files":  {
                  },
        "customers":  {
                      },
        "vendors":  {
                    },
        "teams":  {
                  },
        "unit":  "string"
    }
    ```
  - Response Body: PartShowDTO
    ```json
    {
        "name":  "string",
        "cost":  1,
        "category":  {
                     },
        "nonStock":  true,
        "barcode":  "string",
        "description":  "string",
        "quantity":  1,
        "additionalInfos":  "string",
        "area":  "string",
        "minQuantity":  1,
        "location":  {
                     },
        "image":  {
                  },
        "assignedTo":  {
                       },
        "files":  {
                  },
        "customers":  {
                      },
        "vendors":  {
                    },
        "teams":  {
                  },
        "unit":  "string"
    }
    ```
- **GET** `/parts/mini`
  - Response Body: Collection<PartMiniDTO>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "name":  "string",
                          "description":  "string",
                          "cost":  1,
                          "unit":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/parts/search`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<PartShowDTO>>
    ```json
    "value"
    ```
