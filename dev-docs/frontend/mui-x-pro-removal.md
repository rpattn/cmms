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
- [ ] Step 3: Swap persistence hook
- [ ] Step 4: Convert remaining flat tables
- [ ] Step 5: Tree alternative prototype
- [ ] Step 6: Replace date range pickers
- [ ] Step 7: Remove Pro deps and license

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
