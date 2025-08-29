# /assets
- **POST** `/assets`
  - Request Body: Asset
    ```json
    {
        "customId":  "string",
        "archived":  true,
        "image":  {
                  },
        "location":  {
                     },
        "parentAsset":  {
                        },
        "area":  "string",
        "description":  "string",
        "barCode":  "string",
        "category":  {
                     },
        "name":  "string",
        "primaryUser":  {
                        },
        "acquisitionCost":  1,
        "nfcId":  "string",
        "deprecation":  {
                        },
        "warrantyExpirationDate":  "2024-01-01T00:00:00Z",
        "inServiceDate":  "2024-01-01T00:00:00Z",
        "additionalInfos":  "string",
        "serialNumber":  "string",
        "model":  "string",
        "power":  "string",
        "manufacturer":  "string"
    }
    ```
  - Response Body: AssetShowDTO
    ```json
    {
        "archived":  true,
        "hasChildren":  true,
        "description":  "string",
        "image":  {
                  },
        "location":  {
                     },
        "parentAsset":  {
                        },
        "area":  "string",
        "barCode":  "string",
        "category":  {
                     },
        "name":  "string",
        "primaryUser":  {
                        },
        "deprecation":  {
                        },
        "warrantyExpirationDate":  "2024-01-01T00:00:00Z",
        "inServiceDate":  "2024-01-01T00:00:00Z",
        "additionalInfos":  "string",
        "serialNumber":  "string",
        "model":  "string",
        "acquisitionCost":  1,
        "power":  "string",
        "manufacturer":  "string",
        "customId":  "string"
    }
    ```
- **DELETE** `/assets/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/assets/{id}`
  - Response Body: AssetShowDTO
    ```json
    {
        "archived":  true,
        "hasChildren":  true,
        "description":  "string",
        "image":  {
                  },
        "location":  {
                     },
        "parentAsset":  {
                        },
        "area":  "string",
        "barCode":  "string",
        "category":  {
                     },
        "name":  "string",
        "primaryUser":  {
                        },
        "deprecation":  {
                        },
        "warrantyExpirationDate":  "2024-01-01T00:00:00Z",
        "inServiceDate":  "2024-01-01T00:00:00Z",
        "additionalInfos":  "string",
        "serialNumber":  "string",
        "model":  "string",
        "acquisitionCost":  1,
        "power":  "string",
        "manufacturer":  "string",
        "customId":  "string"
    }
    ```
- **PATCH** `/assets/{id}`
  - Request Body: AssetPatchDTO
    ```json
    {
        "archived":  true,
        "image":  {
                  },
        "location":  {
                     },
        "parentAsset":  {
                        },
        "area":  "string",
        "barCode":  "string",
        "nfcId":  "string",
        "category":  {
                     },
        "name":  "string",
        "primaryUser":  {
                        },
        "deprecation":  {
                        },
        "warrantyExpirationDate":  "2024-01-01T00:00:00Z",
        "additionalInfos":  "string",
        "serialNumber":  "string",
        "assignedTo":  {
                       },
        "customers":  {
                      },
        "vendors":  {
                    },
        "teams":  {
                  },
        "files":  {
                  },
        "parts":  {
                  },
        "status":  {
                   },
        "acquisitionCost":  1,
        "power":  "string",
        "manufacturer":  "string",
        "model":  "string",
        "description":  "string",
        "inServiceDate":  "2024-01-01T00:00:00Z"
    }
    ```
  - Response Body: AssetShowDTO
    ```json
    {
        "archived":  true,
        "hasChildren":  true,
        "description":  "string",
        "image":  {
                  },
        "location":  {
                     },
        "parentAsset":  {
                        },
        "area":  "string",
        "barCode":  "string",
        "category":  {
                     },
        "name":  "string",
        "primaryUser":  {
                        },
        "deprecation":  {
                        },
        "warrantyExpirationDate":  "2024-01-01T00:00:00Z",
        "inServiceDate":  "2024-01-01T00:00:00Z",
        "additionalInfos":  "string",
        "serialNumber":  "string",
        "model":  "string",
        "acquisitionCost":  1,
        "power":  "string",
        "manufacturer":  "string",
        "customId":  "string"
    }
    ```
- **GET** `/assets/barcode/{data}`
  - Response Body: AssetShowDTO
    ```json
    {
        "archived":  true,
        "hasChildren":  true,
        "description":  "string",
        "image":  {
                  },
        "location":  {
                     },
        "parentAsset":  {
                        },
        "area":  "string",
        "barCode":  "string",
        "category":  {
                     },
        "name":  "string",
        "primaryUser":  {
                        },
        "deprecation":  {
                        },
        "warrantyExpirationDate":  "2024-01-01T00:00:00Z",
        "inServiceDate":  "2024-01-01T00:00:00Z",
        "additionalInfos":  "string",
        "serialNumber":  "string",
        "model":  "string",
        "acquisitionCost":  1,
        "power":  "string",
        "manufacturer":  "string",
        "customId":  "string"
    }
    ```
- **GET** `/assets/children/{id}`
  - Response Body: List<AssetShowDTO>
    ```json
    {
        "value":  [
                      {
                          "archived":  true,
                          "hasChildren":  true,
                          "description":  "string",
                          "image":  {
                                    },
                          "location":  {
                                       },
                          "parentAsset":  {
                                          },
                          "area":  "string",
                          "barCode":  "string",
                          "category":  {
                                       },
                          "name":  "string",
                          "primaryUser":  {
                                          },
                          "deprecation":  {
                                          },
                          "warrantyExpirationDate":  "2024-01-01T00:00:00Z",
                          "inServiceDate":  "2024-01-01T00:00:00Z",
                          "additionalInfos":  "string",
                          "serialNumber":  "string",
                          "model":  "string",
                          "acquisitionCost":  1,
                          "power":  "string",
                          "manufacturer":  "string",
                          "customId":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **GET** `/assets/location/{id}`
  - Response Body: Collection<AssetShowDTO>
    ```json
    {
        "value":  [
                      {
                          "archived":  true,
                          "hasChildren":  true,
                          "description":  "string",
                          "image":  {
                                    },
                          "location":  {
                                       },
                          "parentAsset":  {
                                          },
                          "area":  "string",
                          "barCode":  "string",
                          "category":  {
                                       },
                          "name":  "string",
                          "primaryUser":  {
                                          },
                          "deprecation":  {
                                          },
                          "warrantyExpirationDate":  "2024-01-01T00:00:00Z",
                          "inServiceDate":  "2024-01-01T00:00:00Z",
                          "additionalInfos":  "string",
                          "serialNumber":  "string",
                          "model":  "string",
                          "acquisitionCost":  1,
                          "power":  "string",
                          "manufacturer":  "string",
                          "customId":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **GET** `/assets/mini`
  - Response Body: Collection<AssetMiniDTO>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "name":  "string",
                          "customId":  "string",
                          "parentId":  1,
                          "locationId":  1
                      }
                  ],
        "Count":  1
    }
    ```
- **GET** `/assets/nfc/{id}`
  - Response Body: AssetShowDTO
    ```json
    {
        "archived":  true,
        "hasChildren":  true,
        "description":  "string",
        "image":  {
                  },
        "location":  {
                     },
        "parentAsset":  {
                        },
        "area":  "string",
        "barCode":  "string",
        "category":  {
                     },
        "name":  "string",
        "primaryUser":  {
                        },
        "deprecation":  {
                        },
        "warrantyExpirationDate":  "2024-01-01T00:00:00Z",
        "inServiceDate":  "2024-01-01T00:00:00Z",
        "additionalInfos":  "string",
        "serialNumber":  "string",
        "model":  "string",
        "acquisitionCost":  1,
        "power":  "string",
        "manufacturer":  "string",
        "customId":  "string"
    }
    ```
- **GET** `/assets/part/{id}`
  - Response Body: Collection<AssetShowDTO>
    ```json
    {
        "value":  [
                      {
                          "archived":  true,
                          "hasChildren":  true,
                          "description":  "string",
                          "image":  {
                                    },
                          "location":  {
                                       },
                          "parentAsset":  {
                                          },
                          "area":  "string",
                          "barCode":  "string",
                          "category":  {
                                       },
                          "name":  "string",
                          "primaryUser":  {
                                          },
                          "deprecation":  {
                                          },
                          "warrantyExpirationDate":  "2024-01-01T00:00:00Z",
                          "inServiceDate":  "2024-01-01T00:00:00Z",
                          "additionalInfos":  "string",
                          "serialNumber":  "string",
                          "model":  "string",
                          "acquisitionCost":  1,
                          "power":  "string",
                          "manufacturer":  "string",
                          "customId":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/assets/search`
  - Request Body: SearchCriteria
    ```json
    {
    }
    ```
  - Response Body: ResponseEntity<Page<AssetShowDTO>>
    ```json
    "value"
    ```
