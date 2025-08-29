# MUI X Pro Removal Plan

Goal: migrate away from `@mui/x-data-grid-pro` and `@mui/x-date-pickers-pro` to community components or alternatives while preserving UX and performance.

## Inventory (current usage)
- DataGrid Pro
  - License: `frontend/src/index.tsx` (`LicenseInfo.setLicenseKey`) 
  - Wrapper: `frontend/src/content/own/components/CustomDatagrid/index.tsx` (uses `DataGridPro`)
  - Hooks/Types: `useGridStatePersist.ts` (`GridApiPro`), various pages import `useGridApiRef` from Pro
  - Tree data: Assets, Locations, SelectAssetModal, SelectLocationModal use `treeData`, `groupingColDef`, custom grouping cells
- Date Pickers Pro
  - `DateRangePicker` via `@mui/x-date-pickers-pro` used in analytics and forms

## Replacement Strategy
- Flat tables: switch to `@mui/x-data-grid` (community)
- Tree/hierarchy views:
  - Option A: `@tanstack/react-table` + `@tanstack/react-virtual` for tree/row grouping
  - Option B: `@mui/lab/TreeView` for hierarchy + flat `DataGrid` for details
  - Option C: PrimeReact TreeTable (if we accept a second UI lib)
- Grid state persistence: replace `exportState/restoreState` with controlled models + `initialState`
- Date range: two community `DatePicker`s or `react-date-range` (or MUI X v6 community `DateRangePicker` if we upgrade)

## Phased Plan
1. Introduce `CommunityDataGrid` wrapper using `@mui/x-data-grid` (no Pro APIs)
2. Migrate one non-tree screen to `CommunityDataGrid` and replace Pro hooks/types
3. Replace `useGridStatePersist` with model-based persistence
4. Convert remaining non-tree pages
5. Implement tree alternative and migrate: SelectAssetModal, SelectLocationModal, Assets, Locations
6. Replace Pro DateRangePicker usages
7. Remove `LicenseInfo` and uninstall Pro packages

## Notes
- Avoid editing Pro-based screens until a tree alternative is in place
- Keep styles and locale text consistent between wrappers

## Progress Log
- [x] Step 1: Add `CommunityDataGrid`
- [x] Step 2: Convert one non-tree page (Vendors)
- [x] Step 3: Swap persistence hook (model-based)
- [x] Step 4: Convert remaining flat tables (Vendors, Customers, People, Requests, Files, Parts, Purchase Orders, Meters, Preventive Maintenance, Checklists, Roles, Asset subpages)
- [x] Step 5: Tree alternative (Assets, Locations). Selection modals pending.
- [ ] Step 6: Replace date range pickers (Pro → community or `react-date-range`)
- [ ] Step 7: Remove Pro deps and license (drop `LicenseInfo` usage; uninstall packages)

## Implementation Notes
- `CommunityDataGrid` created at `frontend/src/content/own/components/CustomDatagrid/CommunityDataGrid.tsx`:
  - Wraps community `DataGrid`, applies existing styles and locale text.
  - Accepts `notClickable` to preserve pointer behavior.
  - Accepts `apiRef?: any` to ease migration but ignores it internally.
  - Recomputes height on window size changes using `useWindowDimensions()`.
- Vendors page migrated to community grid:
  - File: `frontend/src/content/own/VendorsAndCustomers/Vendors.tsx`
  - Replaced `CustomDataGrid` with `CommunityDataGrid`.
  - Removed Pro-only `useGridApiRef` and `useGridStatePersist` usage.
  - Preserved server pagination/sorting and NoRows overlay.
- Customers page migrated to community grid:
  - File: `frontend/src/content/own/VendorsAndCustomers/Customers.tsx`
  - Replaced `CustomDataGrid` with `CommunityDataGrid`.
  - Removed Pro-only `useGridApiRef` and `useGridStatePersist` usage.
  - Preserved server pagination/sorting and NoRows overlay.
- People page migrated to community grid:
  - File: `frontend/src/content/own/PeopleAndTeams/People.tsx`
  - Replaced `CustomDataGrid` with `CommunityDataGrid`.
  - Removed Pro-only `useGridApiRef` and `useGridStatePersist` usage.
  - Added model-based persistence for pagination, sorting, and columns.
- Requests page migrated to community grid:
   - File: `frontend/src/content/own/Requests/index.tsx`
   - Replaced `CustomDataGrid` with `CommunityDataGrid`.
   - Removed Pro-only `useGridApiRef` and `useGridStatePersist` usage.
  - Added model-based persistence for pagination, sorting, and columns.
- Files page migrated to community grid:
   - File: `frontend/src/content/own/Files/index.tsx`
   - Replaced `CustomDataGrid` with `CommunityDataGrid`.
  - Removed Pro-only `useGridApiRef` and `useGridStatePersist` usage.
  - Added model-based persistence for pagination, sorting, and columns.
 - Parts page migrated to community grid:
   - File: `frontend/src/content/own/Inventory/Parts.tsx`
   - Replaced `CustomDataGrid` with `CommunityDataGrid`.
   - Removed Pro-only `useGridApiRef` and `useGridStatePersist` usage.
   - Added model-based persistence for pagination, sorting, and columns.
 - Purchase Orders migrated to community grid:
   - File: `frontend/src/content/own/PurchaseOrders/index.tsx`
   - Replaced `CustomDataGrid` with `CommunityDataGrid`.
   - Added model-based persistence for pagination, sorting, and columns.
 - Meters page migrated to community grid:
   - File: `frontend/src/content/own/Meters/index.tsx`
   - Replaced `CustomDataGrid` with `CommunityDataGrid`.
   - Removed Pro-only `useGridApiRef` and `useGridStatePersist` usage.
   - Added model-based persistence for pagination, sorting, and columns.
- Preventive Maintenance migrated to community grid:
  - File: `frontend/src/content/own/PreventiveMaintenance/index.tsx`
  - Replaced `CustomDataGrid` with `CommunityDataGrid`.
  - Removed Pro-only `useGridApiRef` and `useGridStatePersist` usage.
  - Added model-based persistence for pagination, sorting, and columns.
 - Checklists migrated to community grid:
   - File: `frontend/src/content/own/Settings/Checklists/index.tsx`
   - Replaced `CustomDataGrid` with `CommunityDataGrid`.
 - Roles migrated to community grid:
   - File: `frontend/src/content/own/Settings/Roles/index.tsx`
   - Replaced `CustomDatagrid` with `CommunityDataGrid`.
 - Analytics WOModals migrated to community grid:
   - Files: `frontend/src/content/own/Analytics/*/WOModal.tsx`
   - Replaced `CustomDataGrid` with `CommunityDataGrid` (columns typed via `CustomDatagridColumn`).
 - Assets (tree):
   - File: `frontend/src/content/own/Assets/index.tsx`
   - Community hierarchy with local expand/collapse + lazy loading.
   - Parent-first rendering (preorder) so children appear under parent.
   - Model-based persistence: view, page/pageSize (list), column visibility, expandedIds; rehydrate expansions on load.
 - Locations (tree):
   - File: `frontend/src/content/own/Locations/index.tsx`
   - Community hierarchy with local expand/collapse + lazy loading.
   - Parent-first rendering (preorder) so children appear under parent.
   - Model-based persistence: tab (list/map), column visibility, expandedIds; pagination hidden.

## Next Steps
- Selection modals: migrate `SelectAssetModal.tsx` and `SelectLocationModal.tsx` off Pro (adopt same hierarchy pattern or use a TreeView).
- Date range: replace `@mui/x-date-pickers-pro` usages with community date pickers (v6) or `react-date-range`.
- Remove Pro:
  - Delete `LicenseInfo.setLicenseKey` from `frontend/src/index.tsx`.
  - Uninstall `@mui/x-data-grid-pro` and `@mui/x-date-pickers-pro`.
  - Verify no lingering Pro imports.
