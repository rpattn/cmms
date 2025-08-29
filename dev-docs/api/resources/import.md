# /import
- **POST** `/import/assets`
  - Request Body: List<AssetImportDTO>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "archived":  "string",
                          "description":  "string",
                          "locationName":  "string",
                          "parentAssetName":  "string",
                          "area":  "string",
                          "barCode":  "string",
                          "category":  "string",
                          "name":  "string",
                          "primaryUserEmail":  "string",
                          "warrantyExpirationDate":  1,
                          "additionalInfos":  "string",
                          "serialNumber":  "string",
                          "assignedToEmails":  "string",
                          "teamsNames":  "string",
                          "status":  "string",
                          "acquisitionCost":  1,
                          "customersNames":  "string",
                          "vendorsNames":  "string",
                          "partsNames":  "string",
                          "model":  "string",
                          "manufacturer":  "string",
                          "power":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
  - Response Body: ImportResponse
    ```json
    {
        "created":  1,
        "updated":  1
    }
    ```
- **GET** `/import/download-template`
  - Response Body: byte[]
    ```json
    "value"
    ```
- **POST** `/import/locations`
  - Request Body: List<LocationImportDTO>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "name":  "string",
                          "address":  "string",
                          "longitude":  1,
                          "latitude":  1,
                          "parentLocationName":  "string",
                          "workersEmails":  "string",
                          "teamsNames":  "string",
                          "customersNames":  "string",
                          "vendorsNames":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
  - Response Body: ImportResponse
    ```json
    {
        "created":  1,
        "updated":  1
    }
    ```
- **POST** `/import/meters`
  - Request Body: List<MeterImportDTO>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "name":  "string",
                          "unit":  "string",
                          "updateFrequency":  1,
                          "meterCategory":  "string",
                          "locationName":  "string",
                          "usersEmails":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
  - Response Body: ImportResponse
    ```json
    {
        "created":  1,
        "updated":  1
    }
    ```
- **POST** `/import/parts`
  - Request Body: List<PartImportDTO>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "name":  "string",
                          "cost":  1,
                          "category":  "string",
                          "nonStock":  "string",
                          "barcode":  "string",
                          "description":  "string",
                          "quantity":  1,
                          "additionalInfos":  "string",
                          "area":  "string",
                          "minQuantity":  1,
                          "locationName":  "string",
                          "assignedToEmails":  "string",
                          "teamsNames":  "string",
                          "customersNames":  "string",
                          "vendorsNames":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
  - Response Body: ImportResponse
    ```json
    {
        "created":  1,
        "updated":  1
    }
    ```
- **POST** `/import/work-orders`
  - Request Body: List<WorkOrderImportDTO>
    ```json
    {
        "value":  [
                      {
                          "id":  1,
                          "title":  "string",
                          "status":  "string",
                          "priority":  "string",
                          "description":  "string",
                          "dueDate":  1,
                          "estimatedDuration":  1,
                          "requiredSignature":  "string",
                          "category":  "string",
                          "locationName":  "string",
                          "teamName":  "string",
                          "primaryUserEmail":  "string",
                          "assignedToEmails":  "string",
                          "assetName":  "string",
                          "completedByEmail":  "string",
                          "completedOn":  1,
                          "archived":  "string",
                          "feedback":  "string",
                          "customersNames":  "string"
                      }
                  ],
        "Count":  1
    }
    ```
  - Response Body: ImportResponse
    ```json
    {
        "created":  1,
        "updated":  1
    }
    ```
