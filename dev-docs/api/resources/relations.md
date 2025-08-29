# /relations
- **GET** `/relations`
  - Response Body: Collection<Relation>
    ```json
    {
        "value":  [
                      {
                          "parent":  {
                                     },
                          "child":  {
                                    }
                      }
                  ],
        "Count":  1
    }
    ```
- **POST** `/relations`
  - Request Body: RelationPostDTO
    ```json
    {
        "parent":  {
                   },
        "child":  {
                  },
        "company":  {
                    }
    }
    ```
  - Response Body: Relation
    ```json
    {
        "parent":  {
                   },
        "child":  {
                  }
    }
    ```
- **DELETE** `/relations/{id}`
  - Response Body: SuccessResponse
    ```json
    {
        "success":  true,
        "message":  "string"
    }
    ```
- **GET** `/relations/{id}`
  - Response Body: Relation
    ```json
    {
        "parent":  {
                   },
        "child":  {
                  }
    }
    ```
- **PATCH** `/relations/{id}`
  - Request Body: RelationPatchDTO
    ```json
    {
        "parent":  {
                   },
        "child":  {
                  }
    }
    ```
  - Response Body: Relation
    ```json
    {
        "parent":  {
                   },
        "child":  {
                  }
    }
    ```
- **GET** `/relations/work-order/{id}`
  - Response Body: Collection<Relation>
    ```json
    {
        "value":  [
                      {
                          "parent":  {
                                     },
                          "child":  {
                                    }
                      }
                  ],
        "Count":  1
    }
    ```
