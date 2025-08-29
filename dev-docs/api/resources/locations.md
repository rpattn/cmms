# /locations
- **GET** `/locations`
  - Response Body: List<LocationShowDTO>
    ```json
    {
        "value":  [
                      {
                          "company":  {
                                      },
                          "name":  "string",
                          "address":  "string",
                          "longitude":  1,
                          "latitude":  1,
                          "hasChildren":  true,
                          "parentLocation":  {
                                             },
                          "image":  {
                                    },
                          "files":  {
                                    },
                          "customId":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/locations`
  - Request Body: Location
    ```json
    {
        "customId":  "string",
        "name":  "string",
        "address":  "string",
        "longitude":  1,
        "latitude":  1,
        "parentLocation":  {
                           },
        "image":  {
                  }
    }
    ```
  - Response Body: LocationShowDTO
    ```json
    {
        "company":  {
                    },
        "name":  "string",
        "address":  "string",
        "longitude":  1,
        "latitude":  1,
        "hasChildren":  true,
        "parentLocation":  {
                           },
        "image":  {
                  },
        "files":  {
                  },
        "customId":  "string"
    }
    ```
- **DELETE** `/locations/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/locations/{id}`
  - Response Body: LocationShowDTO
    ```json
    {
        "company":  {
                    },
        "name":  "string",
        "address":  "string",
        "longitude":  1,
        "latitude":  1,
        "hasChildren":  true,
        "parentLocation":  {
                           },
        "image":  {
                  },
        "files":  {
                  },
        "customId":  "string"
    }
    ```
- **PATCH** `/locations/{id}`
  - Request Body: LocationPatchDTO
    ```json
    {
        "name":  "string",
        "address":  "string",
        "longitude":  1,
        "latitude":  1,
        "parentLocation":  {
                           },
        "workers":  {
                    },
        "teams":  {
                  },
        "vendors":  {
                    },
        "customers":  {
                      },
        "image":  {
                  }
    }
    ```
  - Response Body: LocationShowDTO
    ```json
    {
        "company":  {
                    },
        "name":  "string",
        "address":  "string",
        "longitude":  1,
        "latitude":  1,
        "hasChildren":  true,
        "parentLocation":  {
                           },
        "image":  {
                  },
        "files":  {
                  },
        "customId":  "string"
    }
    ```
- **GET** `/locations/children/{id}`
  - Response Body: Collection<LocationShowDTO>
    ```json
    {
        "value":  [
                      {
                          "company":  {
                                      },
                          "name":  "string",
                          "address":  "string",
                          "longitude":  1,
                          "latitude":  1,
                          "hasChildren":  true,
                          "parentLocation":  {
                                             },
                          "image":  {
                                    },
                          "files":  {
                                    },
                          "customId":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **GET** `/locations/mini`
  - Response Body: Collection<LocationMiniDTO>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "name":  "string",
                          "address":  "string",
                          "customId":  "string",
                          "parentId":  1
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/locations/search`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<LocationShowDTO>>
    ```json
    "value"
    ```
