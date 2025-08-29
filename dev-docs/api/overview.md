# API Endpoints

Generated from annotations in controllers under api/src/main/java/com/grash/controller.

Note: Paths include class-level @RequestMapping prefixes.

## AdditionalCostController
- **POST**: `/additional-costs`
- **DELETE**: `/additional-costs/{id}`
- **GET**: `/additional-costs/{id}`
- **PATCH**: `/additional-costs/{id}`
- **GET**: `/additional-costs/work-order/{id}`

## AssetCategoryController
- **GET**: `/asset-categories`
- **POST**: `/asset-categories`
- **DELETE**: `/asset-categories/{id}`
- **GET**: `/asset-categories/{id}`
- **PATCH**: `/asset-categories/{id}`

## AssetController
- **POST**: `/assets`
- **DELETE**: `/assets/{id}`
- **GET**: `/assets/{id}`
- **PATCH**: `/assets/{id}`
- **GET**: `/assets/barcode/{data}`
- **GET**: `/assets/children/{id}`
- **GET**: `/assets/location/{id}`
- **GET**: `/assets/mini`
- **GET**: `/assets/nfc/{id}`
- **GET**: `/assets/part/{id}`
- **POST**: `/assets/search`

## AssetDowntimeController
- **POST**: `/asset-downtimes`
- **DELETE**: `/asset-downtimes/{id}`
- **GET**: `/asset-downtimes/{id}`
- **PATCH**: `/asset-downtimes/{id}`
- **GET**: `/asset-downtimes/asset/{id}`

## AuthController
- **DELETE**: `/auth/{username}`
- **GET**: `/auth/{username}`
- **GET**: `/auth/activate-account`
- **GET**: `/auth/me`
- **GET**: `/auth/refresh`
- **GET**: `/auth/resetpwd`
- **GET**: `/auth/reset-pwd-confirm`
- **POST**: `/auth/sendMail`
- **POST**: `/auth/signin`
- **POST**: `/auth/signup`
- **GET**: `/auth/switch-account`
- **POST**: `/auth/updatepwd`

## ChecklistController
- **GET**: `/checklists`
- **POST**: `/checklists`
- **DELETE**: `/checklists/{id}`
- **GET**: `/checklists/{id}`
- **PATCH**: `/checklists/{id}`

## CompanyController
- **GET**: `/companies/{id}`
- **PATCH**: `/companies/{id}`

## CompanySettingsController
- **GET**: `/company-settings/{id}`

## CostCategoryController
- **GET**: `/cost-categories`
- **POST**: `/cost-categories`
- **DELETE**: `/cost-categories/{id}`
- **GET**: `/cost-categories/{id}`
- **PATCH**: `/cost-categories/{id}`

## CurrencyController
- **GET**: `/currencies`
- **POST**: `/currencies`
- **DELETE**: `/currencies/{id}`
- **GET**: `/currencies/{id}`
- **PATCH**: `/currencies/{id}`

## CustomerController
- **POST**: `/customers`
- **DELETE**: `/customers/{id}`
- **GET**: `/customers/{id}`
- **PATCH**: `/customers/{id}`
- **GET**: `/customers/mini`
- **POST**: `/customers/search`

## CustomFieldController
- **POST**: `/custom-fields`
- **DELETE**: `/custom-fields/{id}`
- **GET**: `/custom-fields/{id}`
- **PATCH**: `/custom-fields/{id}`

## DeprecationController
- **POST**: `/deprecations`
- **DELETE**: `/deprecations/{id}`
- **GET**: `/deprecations/{id}`
- **PATCH**: `/deprecations/{id}`

## ExportController
- **GET**: `/export/assets`
- **GET**: `/export/locations`
- **GET**: `/export/meters`
- **GET**: `/export/parts`
- **GET**: `/export/work-orders`

## FastSpringController
- **GET**: `/fast-spring/cancel`
- **POST**: `/fast-spring/deactivate`
- **POST**: `/fast-spring/new-subscription`
- **POST**: `/fast-spring/renew-subscription`
- **GET**: `/fast-spring/resume`

## FieldConfigurationController
- **PATCH**: `/field-configurations/{id}`

## FileController
- **DELETE**: `/files/{id}`
- **GET**: `/files/{id}`
- **PATCH**: `/files/{id}`
- **GET**: `/files/download/privacy-policy`
- **GET**: `/files/download/tos`
- **POST**: `/files/search`
- **POST**: `/files/upload`

## FloorPlanController
- **POST**: `/floor-plans`
- **DELETE**: `/floor-plans/{id}`
- **GET**: `/floor-plans/{id}`
- **PATCH**: `/floor-plans/{id}`
- **GET**: `/floor-plans/location/{id}`

## GeneralPreferencesController
- **GET**: `/general-preferences`
- **GET**: `/general-preferences/{id}`
- **PATCH**: `/general-preferences/{id}`

## HealthCheckController
- **GET**: `/health-check`

## ImportController
- **POST**: `/import/assets`
- **GET**: `/import/download-template`
- **POST**: `/import/locations`
- **POST**: `/import/meters`
- **POST**: `/import/parts`
- **POST**: `/import/work-orders`

## LaborController
- **POST**: `/labors`
- **DELETE**: `/labors/{id}`
- **GET**: `/labors/{id}`
- **PATCH**: `/labors/{id}`
- **GET**: `/labors/work-order/{id}`
- **POST**: `/labors/work-order/{id}`

## LicenseController
- **GET**: `/license/validity`

## LocationController
- **GET**: `/locations`
- **POST**: `/locations`
- **DELETE**: `/locations/{id}`
- **GET**: `/locations/{id}`
- **PATCH**: `/locations/{id}`
- **GET**: `/locations/children/{id}`
- **GET**: `/locations/mini`
- **POST**: `/locations/search`

## MeterCategoryController
- **GET**: `/meter-categories`
- **POST**: `/meter-categories`
- **DELETE**: `/meter-categories/{id}`
- **GET**: `/meter-categories/{id}`
- **PATCH**: `/meter-categories/{id}`

## MeterController
- **POST**: `/meters`
- **DELETE**: `/meters/{id}`
- **GET**: `/meters/{id}`
- **PATCH**: `/meters/{id}`
- **GET**: `/meters/asset/{id}`
- **GET**: `/meters/mini`
- **POST**: `/meters/search`

## MultiPartsController
- **GET**: `/multi-parts`
- **POST**: `/multi-parts`
- **DELETE**: `/multi-parts/{id}`
- **GET**: `/multi-parts/{id}`
- **PATCH**: `/multi-parts/{id}`
- **GET**: `/multi-parts/mini`

## NotificationController
- **GET**: `/notifications`
- **GET**: `/notifications/{id}`
- **PATCH**: `/notifications/{id}`
- **POST**: `/notifications/push-token`
- **GET**: `/notifications/read-all`
- **POST**: `/notifications/search`

## PartCategoryController
- **GET**: `/part-categories`
- **POST**: `/part-categories`
- **DELETE**: `/part-categories/{id}`
- **GET**: `/part-categories/{id}`
- **PATCH**: `/part-categories/{id}`

## PartController
- **POST**: `/parts`
- **DELETE**: `/parts/{id}`
- **GET**: `/parts/{id}`
- **PATCH**: `/parts/{id}`
- **GET**: `/parts/mini`
- **POST**: `/parts/search`

## PartQuantityController
- **POST**: `/part-quantities`
- **DELETE**: `/part-quantities/{id}`
- **GET**: `/part-quantities/{id}`
- **PATCH**: `/part-quantities/{id}`
- **GET**: `/part-quantities/purchase-order/{id}`
- **PATCH**: `/part-quantities/purchase-order/{id}`
- **GET**: `/part-quantities/work-order/{id}`
- **PATCH**: `/part-quantities/work-order/{id}`

## PreventiveMaintenanceController
- **POST**: `/preventive-maintenances`
- **DELETE**: `/preventive-maintenances/{id}`
- **GET**: `/preventive-maintenances/{id}`
- **PATCH**: `/preventive-maintenances/{id}`
- **POST**: `/preventive-maintenances/search`

## PurchaseOrderCategoryController
- **GET**: `/purchase-order-categories`
- **POST**: `/purchase-order-categories`
- **DELETE**: `/purchase-order-categories/{id}`
- **GET**: `/purchase-order-categories/{id}`
- **PATCH**: `/purchase-order-categories/{id}`

## PurchaseOrderController
- **POST**: `/purchase-orders`
- **DELETE**: `/purchase-orders/{id}`
- **GET**: `/purchase-orders/{id}`
- **PATCH**: `/purchase-orders/{id}`
- **PATCH**: `/purchase-orders/{id}/respond`
- **POST**: `/purchase-orders/search`

## ReadingController
- **POST**: `/readings`
- **DELETE**: `/readings/{id}`
- **PATCH**: `/readings/{id}`
- **GET**: `/readings/meter/{id}`

## RelationController
- **GET**: `/relations`
- **POST**: `/relations`
- **DELETE**: `/relations/{id}`
- **GET**: `/relations/{id}`
- **PATCH**: `/relations/{id}`
- **GET**: `/relations/work-order/{id}`

## RequestController
- **POST**: `/requests`
- **DELETE**: `/requests/{id}`
- **GET**: `/requests/{id}`
- **PATCH**: `/requests/{id}`
- **PATCH**: `/requests/{id}/approve`
- **PATCH**: `/requests/{id}/cancel`
- **GET**: `/requests/pending`
- **POST**: `/requests/search`

## RoleController
- **GET**: `/roles`
- **POST**: `/roles`
- **DELETE**: `/roles/{id}`
- **GET**: `/roles/{id}`
- **PATCH**: `/roles/{id}`

## ScheduleController
- **GET**: `/schedules`
- **DELETE**: `/schedules/{id}`
- **GET**: `/schedules/{id}`
- **PATCH**: `/schedules/{id}`

## SubscriptionController
- **GET**: `/subscriptions`
- **DELETE**: `/subscriptions/{id}`
- **POST**: `/subscriptions/downgrade`
- **POST**: `/subscriptions/request-upgrade`
- **POST**: `/subscriptions/upgrade`

## SubscriptionPlanController
- **GET**: `/subscription-plans`
- **POST**: `/subscription-plans`
- **DELETE**: `/subscription-plans/{id}`
- **GET**: `/subscription-plans/{id}`
- **PATCH**: `/subscription-plans/{id}`

## TaskBaseController
- **POST**: `/task-bases`
- **DELETE**: `/task-bases/{id}`
- **GET**: `/task-bases/{id}`
- **PATCH**: `/task-bases/{id}`

## TaskController
- **DELETE**: `/tasks/{id}`
- **GET**: `/tasks/{id}`
- **PATCH**: `/tasks/{id}`
- **GET**: `/tasks/preventive-maintenance/{id}`
- **PATCH**: `/tasks/preventive-maintenance/{id}`
- **GET**: `/tasks/work-order/{id}`
- **PATCH**: `/tasks/work-order/{id}`

## TeamController
- **POST**: `/teams`
- **DELETE**: `/teams/{id}`
- **GET**: `/teams/{id}`
- **PATCH**: `/teams/{id}`
- **GET**: `/teams/mini`
- **POST**: `/teams/search`

## TimeCategoryController
- **GET**: `/time-categories`
- **POST**: `/time-categories`
- **DELETE**: `/time-categories/{id}`
- **GET**: `/time-categories/{id}`
- **PATCH**: `/time-categories/{id}`

## UiConfigurationController
- **PATCH**: `/ui-configurations`

## UserController
- **GET**: `/users/{id}`
- **PATCH**: `/users/{id}`
- **PATCH**: `/users/{id}/disable`
- **PATCH**: `/users/{id}/role`
- **POST**: `/users/invite`
- **GET**: `/users/mini`
- **GET**: `/users/mini/disabled`
- **POST**: `/users/search`

## UserSettingsController
- **GET**: `/user-settings/{id}`
- **PATCH**: `/user-settings/{id}`

## VendorController
- **POST**: `/vendors`
- **DELETE**: `/vendors/{id}`
- **GET**: `/vendors/{id}`
- **PATCH**: `/vendors/{id}`
- **GET**: `/vendors/mini`
- **POST**: `/vendors/search`

## WorkflowController
- **GET**: `/workflows`
- **POST**: `/workflows`
- **DELETE**: `/workflows/{id}`
- **GET**: `/workflows/{id}`
- **PATCH**: `/workflows/{id}`

## WorkOrderCategoryController
- **GET**: `/work-order-categories`
- **POST**: `/work-order-categories`
- **DELETE**: `/work-order-categories/{id}`
- **GET**: `/work-order-categories/{id}`
- **PATCH**: `/work-order-categories/{id}`

## WorkOrderConfigurationController
- **GET**: `/work-order-configurations/{id}`

## WorkOrderController
- **POST**: `/work-orders`
- **DELETE**: `/work-orders/{id}`
- **GET**: `/work-orders/{id}`
- **PATCH**: `/work-orders/{id}`
- **PATCH**: `/work-orders/{id}/change-status`
- **GET**: `/work-orders/asset/{id}`
- **POST**: `/work-orders/events`
- **DELETE**: `/work-orders/files/{id}/{fileId}/remove`
- **PATCH**: `/work-orders/files/{id}/add`
- **GET**: `/work-orders/location/{id}`
- **GET**: `/work-orders/part/{id}`
- **GET**: `/work-orders/report/{id}`
- **POST**: `/work-orders/search`
- **POST**: `/work-orders/search/mini`
- **GET**: `/work-orders/urgent`

## WorkOrderHistoryController
- **GET**: `/work-order-histories/{id}`
- **GET**: `/work-order-histories/work-order/{id}`

## WorkOrderMeterTriggerController
- **POST**: `/work-order-meter-triggers`
- **DELETE**: `/work-order-meter-triggers/{id}`
- **GET**: `/work-order-meter-triggers/{id}`
- **PATCH**: `/work-order-meter-triggers/{id}`
- **GET**: `/work-order-meter-triggers/meter/{id}`

## WorkOrderRequestConfigurationController
- **GET**: `/work-order-request-configurations/{id}`

