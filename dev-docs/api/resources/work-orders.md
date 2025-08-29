# /work-orders
- **POST** `/work-orders`
  - Request Body: WorkOrderPostDTO
    ```json
    {
        "assetStatus":  {
                        }
    }
    ```
  - Response Body: WorkOrderShowDTO
    ```json
    {
        "completedBy":  {
                        },
        "completedOn":  "2024-01-01T00:00:00Z",
        "archived":  true,
        "parentRequest":  {
                          },
        "parentPreventiveMaintenance":  {
                                        },
        "signature":  {
                      },
        "status":  {
                   },
        "feedback":  "string",
        "audioDescription":  {
                             },
        "customId":  "string"
    }
    ```
- **DELETE** `/work-orders/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/work-orders/{id}`
  - Response Body: WorkOrderShowDTO
    ```json
    {
        "completedBy":  {
                        },
        "completedOn":  "2024-01-01T00:00:00Z",
        "archived":  true,
        "parentRequest":  {
                          },
        "parentPreventiveMaintenance":  {
                                        },
        "signature":  {
                      },
        "status":  {
                   },
        "feedback":  "string",
        "audioDescription":  {
                             },
        "customId":  "string"
    }
    ```
- **PATCH** `/work-orders/{id}`
  - Request Body: WorkOrderPatchDTO
    ```json
    {
        "completedBy":  {
                        },
        "completedOn":  "2024-01-01T00:00:00Z",
        "archived":  true
    }
    ```
  - Response Body: WorkOrderShowDTO
    ```json
    {
        "completedBy":  {
                        },
        "completedOn":  "2024-01-01T00:00:00Z",
        "archived":  true,
        "parentRequest":  {
                          },
        "parentPreventiveMaintenance":  {
                                        },
        "signature":  {
                      },
        "status":  {
                   },
        "feedback":  "string",
        "audioDescription":  {
                             },
        "customId":  "string"
    }
    ```
- **PATCH** `/work-orders/{id}/change-status`
  - Request Body: WorkOrderChangeStatusDTO
    ```json
    {
        "status":  {
                   },
        "signature":  {
                      },
        "feedback":  "string"
    }
    ```
  - Response Body: WorkOrderShowDTO
    ```json
    {
        "completedBy":  {
                        },
        "completedOn":  "2024-01-01T00:00:00Z",
        "archived":  true,
        "parentRequest":  {
                          },
        "parentPreventiveMaintenance":  {
                                        },
        "signature":  {
                      },
        "status":  {
                   },
        "feedback":  "string",
        "audioDescription":  {
                             },
        "customId":  "string"
    }
    ```
- **GET** `/work-orders/asset/{id}`
  - Response Body: Collection<WorkOrderShowDTO>
    ```json
    {
        "value":  [
                      {
                          "completedBy":  {
                                          },
                          "completedOn":  "2024-01-01T00:00:00Z",
                          "archived":  true,
                          "parentRequest":  {
                                            },
                          "parentPreventiveMaintenance":  {
                                                          },
                          "signature":  {
                                        },
                          "status":  {
                                     },
                          "feedback":  "string",
                          "audioDescription":  {
                                               },
                          "customId":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/work-orders/events`
  - Request Body: DateRange
    ```json
    {
        "start":  "2024-01-01T00:00:00Z",
        "end":  "2024-01-01T00:00:00Z"
    }
    ```
  - Response Body: Collection<CalendarEvent<WorkOrderBaseMiniDTO>>
    ```json
    {
        "value":  [
                      "value"
                  ],
        "Count":  1
    }
    ```
- **DELETE** `/work-orders/files/{id}/{fileId}/remove`
  - Response Body: List<File>
    ```json
    {
        "value":  [
                      {
                          "name":  "string",
                          "path":  "string",
                          "task":  {
                                   }
                      }
                  ],
        "Count":  1
    }
    ```
- **PATCH** `/work-orders/files/{id}/add`
  - Request Body: List<File>
    ```json
    {
        "value":  [
                      {
                          "name":  "string",
                          "path":  "string",
                          "task":  {
                                   }
                      }
                  ],
        "Count":  1
    }
    ```
  - Response Body: List<File>
    ```json
    {
        "value":  [
                      {
                          "name":  "string",
                          "path":  "string",
                          "task":  {
                                   }
                      }
                  ],
        "Count":  1
    }
    ```
- **GET** `/work-orders/location/{id}`
  - Response Body: Collection<WorkOrderShowDTO>
    ```json
    {
        "value":  [
                      {
                          "completedBy":  {
                                          },
                          "completedOn":  "2024-01-01T00:00:00Z",
                          "archived":  true,
                          "parentRequest":  {
                                            },
                          "parentPreventiveMaintenance":  {
                                                          },
                          "signature":  {
                                        },
                          "status":  {
                                     },
                          "feedback":  "string",
                          "audioDescription":  {
                                               },
                          "customId":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **GET** `/work-orders/part/{id}`
  - Response Body: Collection<WorkOrderShowDTO>
    ```json
    {
        "value":  [
                      {
                          "completedBy":  {
                                          },
                          "completedOn":  "2024-01-01T00:00:00Z",
                          "archived":  true,
                          "parentRequest":  {
                                            },
                          "parentPreventiveMaintenance":  {
                                                          },
                          "signature":  {
                                        },
                          "status":  {
                                     },
                          "feedback":  "string",
                          "audioDescription":  {
                                               },
                          "customId":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/work-orders/search`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<WorkOrderShowDTO>>
    ```json
    "value"
    ```
- **POST** `/work-orders/search/mini`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<WorkOrderBaseMiniDTO>>
    ```json
    "value"
    ```
- **GET** `/work-orders/urgent`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
