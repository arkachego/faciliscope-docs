# Fields

Complete reference for all facility fields in FaciliScope.

## Core Identification Fields

### Name

| Type | Required | Description |
|------|----------|-------------|
| String | Yes | Name of the facility (1-200 characters). Used for identification and display. Best practice: Use descriptive names (e.g., "Main Office Building", "Warehouse A"). |

## Address Fields

### Address

| Type | Required | Description |
|------|----------|-------------|
| String | No | Street address of the facility. Physical location information. Best practice: Include complete street address. |

### City

| Type | Required | Description |
|------|----------|-------------|
| String | No | City where the facility is located. Address component. |

### State

| Type | Required | Description |
|------|----------|-------------|
| String | No | State or province where the facility is located. Address component. |

### ZIP Code

| Type | Required | Description |
|------|----------|-------------|
| String | No | Postal or ZIP code of the facility. Address component. |

### Country

| Type | Required | Description |
|------|----------|-------------|
| String | No | Country where the facility is located. Default: USA. Address component. |

## Status

### Status

| Type | Required | Description |
|------|----------|-------------|
| Enum (FacilityStatus) | Yes | Current status of the facility. Options: **ACTIVE** (operational), **INACTIVE** (not in use), **MAINTENANCE** (under maintenance), **PLANNED** (planned but not yet active). Default: ACTIVE. Best practice: Keep status current for accurate reporting. |

## Assignment Fields

### Assigned Users

| Type | Required | Description |
|------|----------|-------------|
| Array of User IDs | No | Array of user IDs assigned to this facility. Supports multiple user assignments (MANAGER, SUPERVISOR, TECHNICIAN). All assigned users can view and manage the facility. |

### Assignments (Relation)

| Type | Required | Description |
|------|----------|-------------|
| FacilityAssignment[] | Auto | Full assignment records with user details including user information, role, assignment date, and assigned by. Automatically populated when viewing facility. |

## System Fields

### Organization ID

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | Yes (system-assigned) | ID of the organization that owns this facility. Multi-tenancy isolation. Automatically set, cannot be changed. |

### Created At

| Type | Required | Description |
|------|----------|-------------|
| DateTime | Yes (system-assigned) | When the facility was created. Audit trail and reporting. Automatically set, read-only. |

### Updated At

| Type | Required | Description |
|------|----------|-------------|
| DateTime | Yes (system-updated) | When the facility was last updated. Audit trail and change tracking. Automatically updated, read-only. |

## Related Resources (Relations)

| Relation Name | Type | Description |
|---------------|------|-------------|
| Organization | Organization object | Organization that owns the facility. Provides organization details. |
| Assets | Asset[] array | All assets located in this facility. Shows facility assets. |
| Work Orders | WorkOrder[] array | All work orders for this facility. Shows facility maintenance history. |
| Maintenance Schedules | MaintenanceSchedule[] array | All maintenance schedules for this facility. Shows scheduled maintenance. |
| Spaces | Space[] array | All spaces within this facility. Shows rooms and areas. |
| Compliance Records | ComplianceRecord[] array | All compliance records for this facility. Shows certifications and inspections. |
| Energy Meters | EnergyMeter[] array | All energy meters for this facility. Shows energy monitoring. |
| Inventory Items | InventoryItem[] array | All inventory items stored in this facility. Shows facility inventory. |
| Budgets | Budget[] array | All budgets associated with this facility. Shows financial planning. |
| Assignments | FacilityAssignment[] array | All user assignments with details. Shows all assigned users and their roles. |

## Field Categories

### Required Fields

| Field Name | Description |
|---|---|
| **Name** | Facility name |
| **Status** | Current status |

### Recommended Fields

| Field Name | Description |
|---|---|
| **Address** | Street address |
| **City** | City name |
| **State** | State or province |
| **ZIP Code** | Postal code |
| **Country** | Country |

### Optional Fields

| Field Name | Description |
|---|---|
| **Assigned Users** | User assignments |

### System Fields (Read-Only)

| Field Name | Description |
|---|---|
| **Organization ID** | System-assigned |
| **Created At** | System-assigned |
| **Updated At** | Auto-updated |

## Validation Rules

| Field Name | Rule |
|---|---|
| **Name** | 1-200 characters, required |
| **Status** | Must be one of: ACTIVE, INACTIVE, MAINTENANCE, PLANNED |

## Next Steps

- [Workflows](/docs/resources/facilities/workflows) - How to use these fields
- [Examples](/docs/resources/facilities/examples) - Real-world usage
- [Best Practices](/docs/resources/facilities/best-practices) - Tips and recommendations

