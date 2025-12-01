# Fields

Complete reference for all maintenance schedule fields in FaciliScope.

## Core Identification Fields

### Name

| Type | Required | Description |
|------|----------|-------------|
| String | Yes | Name of the maintenance schedule (1-200 characters). Used for identification and display. Best practice: Use descriptive names (e.g., "Monthly HVAC Filter Replacement"). |

### Description

| Type | Required | Description |
|------|----------|-------------|
| String (text area) | No | Detailed description of the maintenance schedule. Provides context and instructions. Best practice: Include maintenance procedures and requirements. |

## Asset and Location

### Asset

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | Yes | ID of the asset that requires maintenance. Links schedule to a specific asset. Required for asset-based maintenance. |

### Facility

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | No | ID of the facility where maintenance is performed. Links schedule to a facility. Used for facility-wide maintenance. |

## Maintenance Configuration

### Type

| Type | Required | Description |
|------|----------|-------------|
| Enum (MaintenanceType) | Yes | Type of maintenance. Options: **PREVENTIVE** (scheduled maintenance), **INSPECTION** (regular inspections), **CALIBRATION** (calibration tasks). Determines maintenance category. |

### Priority

| Type | Required | Description |
|------|----------|-------------|
| Enum (MaintenancePriority) | Yes | Priority level for maintenance. Options: **CRITICAL** (high priority), **HIGH** (important), **MEDIUM** (normal), **LOW** (low priority). Determines scheduling priority. |

## Frequency Configuration

### Frequency Type

| Type | Required | Description |
|------|----------|-------------|
| Enum (MaintenanceFrequencyType) | Yes | How often maintenance occurs. Options: **DAILY**, **WEEKLY**, **MONTHLY**, **QUARTERLY**, **YEARLY**, **CUSTOM** (custom interval). Determines schedule frequency. |

### Frequency Value

| Type | Required | Description |
|------|----------|-------------|
| Integer | No | Number of frequency units (for CUSTOM frequency type). Used with frequency unit to define custom intervals. Example: 30 for 30 days. |

### Frequency Unit

| Type | Required | Description |
|------|----------|-------------|
| String | No | Unit for custom frequency (DAYS, WEEKS, MONTHS). Used with frequency value for CUSTOM frequency type. Example: "DAYS" with value 30 means every 30 days. |

## Scheduling Fields

### Next Due Date

| Type | Required | Description |
|------|----------|-------------|
| DateTime | No | Next scheduled date for maintenance. Automatically calculated based on frequency. Format: ISO 8601 date-time. |

### Last Completed Date

| Type | Required | Description |
|------|----------|-------------|
| DateTime | No | Date when maintenance was last completed. Tracks maintenance history. Format: ISO 8601 date-time. |

### Estimated Hours

| Type | Required | Description |
|------|----------|-------------|
| Float (decimal) | No | Expected time to complete maintenance (in hours). Helps with planning and scheduling. Example: 2.5 (for 2 hours and 30 minutes). |

## Status

### Is Active

| Type | Required | Description |
|------|----------|-------------|
| Boolean | Yes | Whether the schedule is currently active. Inactive schedules do not generate work orders. Default: true. Best practice: Deactivate schedules for retired assets. |

## Assignment Fields

### Assigned Users

| Type | Required | Description |
|------|----------|-------------|
| Array of User IDs | No | Array of user IDs assigned to this maintenance schedule. Supports multiple user assignments. Assigned users are notified of upcoming maintenance. |

### Assignments (Relation)

| Type | Required | Description |
|------|----------|-------------|
| MaintenanceScheduleAssignment[] | Auto | Full assignment records with user details including user information, role, assignment date, and assigned by. Automatically populated when viewing schedule. |

## System Fields

### Organization ID

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | Yes (system-assigned) | ID of the organization that owns this schedule. Multi-tenancy isolation. Automatically set, cannot be changed. |

### Created By ID

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | Yes (system-assigned) | ID of the user who created the schedule. Audit trail and ownership. Automatically set to current user. |

### Created At

| Type | Required | Description |
|------|----------|-------------|
| DateTime | Yes (system-assigned) | When the schedule was created. Audit trail and reporting. Automatically set, read-only. |

### Updated At

| Type | Required | Description |
|------|----------|-------------|
| DateTime | Yes (system-updated) | When the schedule was last updated. Audit trail and change tracking. Automatically updated, read-only. |

## Related Resources (Relations)

| Relation Name | Type | Description |
|---------------|------|-------------|
| Asset | Asset object | Full asset information. Provides asset details in schedule view. |
| Facility | Facility object | Full facility information. Provides facility details in schedule view. |
| Created By | User object | User who created the schedule. Shows who created the schedule. |
| Assignments | MaintenanceScheduleAssignment[] array | All user assignments with details. Shows all assigned users and their roles. |
| Checklist | MaintenanceChecklist[] array | All checklist items for this schedule. Defines maintenance procedures. |
| Executions | MaintenanceExecution[] array | All maintenance executions. Shows maintenance history. |

## Field Categories

### Required Fields

| Field Name | Description |
|---|---|
| **Name** | Schedule name |
| **Asset** | Asset to maintain |
| **Type** | Maintenance type |
| **Priority** | Priority level |
| **Frequency Type** | Schedule frequency |
| **Is Active** | Active status |

### Recommended Fields

| Field Name | Description |
|---|---|
| **Description** | Detailed description |
| **Facility** | Facility location |
| **Estimated Hours** | Time estimate |
| **Assigned Users** | User assignments |

### Optional Fields

| Field Name | Description |
|---|---|
| **Frequency Value** | Custom frequency value |
| **Frequency Unit** | Custom frequency unit |
| **Next Due Date** | Next scheduled date |
| **Last Completed Date** | Last completion date |

### System Fields (Read-Only)

| Field Name | Description |
|---|---|
| **Organization ID** | System-assigned |
| **Created By ID** | System-assigned |
| **Created At** | System-assigned |
| **Updated At** | Auto-updated |

## Validation Rules

| Field Name | Rule |
|---|---|
| **Name** | 1-200 characters, required |
| **Asset** | Must be valid asset ID, required |
| **Frequency Value** | Must be positive integer if provided |
| **Estimated Hours** | Must be positive number if provided |

## Next Steps

- [Workflows](/docs/resources/maintenance-schedules/workflows) - How to use these fields
- [Examples](/docs/resources/maintenance-schedules/examples) - Real-world usage
- [Best Practices](/docs/resources/maintenance-schedules/best-practices) - Tips and recommendations

