# Fields

Complete reference for all asset fields in FaciliScope.

## Core Identification Fields

### Name

| Type | Required | Description |
|------|----------|-------------|
| String | Yes | Name of the asset (1-200 characters). Used for identification and display. Best practice: Use descriptive names that clearly identify the asset. |

### Description

| Type | Required | Description |
|------|----------|-------------|
| String (text area) | No | Detailed description of the asset. Provides additional context and information. Best practice: Include specifications, features, or important details. |

### Asset Tag

| Type | Required | Description |
|------|----------|-------------|
| String | No | Unique identifier tag for the asset within your organization. Used for physical labeling and tracking. Best practice: Use a consistent tagging format (e.g., "HVAC-001"). |

### Serial Number

| Type | Required | Description |
|------|----------|-------------|
| String | No | Manufacturer's serial number. Used for warranty tracking and manufacturer support. Best practice: Record serial numbers for warranty and support purposes. |

## Manufacturer Information

### Manufacturer

| Type | Required | Description |
|------|----------|-------------|
| String | No | Name of the manufacturer. Helps with parts ordering and support. Best practice: Use full manufacturer name for consistency. |

### Model

| Type | Required | Description |
|------|----------|-------------|
| String | No | Model number or name. Used for parts identification and specifications. Best practice: Include complete model number. |

## Purchase Information

### Purchase Date

| Type | Required | Description |
|------|----------|-------------|
| DateTime | No | Date when the asset was purchased. Tracks asset age and depreciation. Format: ISO 8601 date-time. |

### Warranty Expiry

| Type | Required | Description |
|------|----------|-------------|
| DateTime | No | Date when the warranty expires. Important for warranty claims and maintenance planning. Format: ISO 8601 date-time. |

## Status and Location

### Status

| Type | Required | Description |
|------|----------|-------------|
| Enum (AssetStatus) | Yes | Current status of the asset. Options: **ACTIVE** (in use), **INACTIVE** (not in use), **MAINTENANCE** (under maintenance), **RETIRED** (no longer in service). Default: ACTIVE. Best practice: Keep status current for accurate reporting. |

### Location

| Type | Required | Description |
|------|----------|-------------|
| String | No | Physical location description within the facility. Provides specific location information. Example: "3rd Floor, Room 301, North Wing". |

### Facility

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | No | ID of the facility where the asset is located. Links asset to a specific facility. Best practice: Always specify facility for better organization. |

### Space

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | No | ID of the space (room) where the asset is located. Provides precise location within facility. Best practice: Specify space when known for better tracking. |

## Organization and Hierarchy

### Category

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | No | ID of the asset category. Organizes assets by type (HVAC, Electrical, Plumbing, etc.). Best practice: Use categories for better organization and reporting. |

### Parent Asset

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | No | ID of the parent asset if this is a component of a larger asset. Supports asset hierarchy. Example: A compressor as a child of an HVAC system. |

## Visual Identification

### QR Code

| Type | Required | Description |
|------|----------|-------------|
| String | No | QR code identifier for the asset. Used for quick scanning and identification. Automatically generated or manually assigned. |

### Image URLs

| Type | Required | Description |
|------|----------|-------------|
| Array of Strings (URLs) | No | URLs of asset photos or images. Visual documentation of the asset. Best practice: Include photos for identification and documentation. |

## Assignment Fields

### Assigned Users

| Type | Required | Description |
|------|----------|-------------|
| Array of User IDs | No | Array of user IDs assigned to this asset. Supports multiple user assignments (MANAGER, SUPERVISOR, TECHNICIAN). All assigned users can view and manage the asset. |

### Assignments (Relation)

| Type | Required | Description |
|------|----------|-------------|
| AssetAssignment[] | Auto | Full assignment records with user details including user information, role, assignment date, and assigned by. Automatically populated when viewing asset. |

## System Fields

### Organization ID

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | Yes (system-assigned) | ID of the organization that owns this asset. Multi-tenancy isolation. Automatically set, cannot be changed. |

### Created By ID

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | Yes (system-assigned) | ID of the user who created the asset. Audit trail and ownership. Automatically set to current user. |

### Created At

| Type | Required | Description |
|------|----------|-------------|
| DateTime | Yes (system-assigned) | When the asset was created. Audit trail and reporting. Automatically set, read-only. |

### Updated At

| Type | Required | Description |
|------|----------|-------------|
| DateTime | Yes (system-updated) | When the asset was last updated. Audit trail and change tracking. Automatically updated, read-only. |

## Related Resources (Relations)

| Relation Name | Type | Description |
|---------------|------|-------------|
| Facility | Facility object | Full facility information including name, address, and status. Provides facility details in asset view. |
| Space | Space object | Full space information including name, type, and location. Provides space details in asset view. |
| Category | AssetCategory object | Asset category information including name and description. Organizes assets by type. |
| Created By | User object | User who created the asset. Includes name, email, and role. Shows who created the asset. |
| Assignments | AssetAssignment[] array | All user assignments with details. Includes user info, role, assignment date, and assigned by. Shows all assigned users and their roles. |
| Parent Asset | Asset object | Parent asset if this is a component. Shows parent asset details. |
| Child Assets | Asset[] array | Child assets if this asset has components. Shows all child assets. |
| Work Orders | WorkOrder[] array | All work orders related to this asset. Shows maintenance history. |
| Maintenance Schedules | MaintenanceSchedule[] array | All maintenance schedules for this asset. Shows scheduled maintenance. |
| Compliance Records | ComplianceRecord[] array | All compliance records for this asset. Shows certifications and inspections. |

## Field Categories

### Required Fields

| Field Name | Description |
|---|---|
| **Name** | Asset name |
| **Status** | Current status |

### Recommended Fields

| Field Name | Description |
|---|---|
| **Asset Tag** | Unique identifier |
| **Facility** | Facility location |
| **Category** | Asset category |
| **Manufacturer** | Manufacturer name |
| **Model** | Model number |

### Optional Fields

| Field Name | Description |
|---|---|
| **Description** | Detailed description |
| **Serial Number** | Serial number |
| **Purchase Date** | Purchase date |
| **Warranty Expiry** | Warranty expiration |
| **Location** | Physical location |
| **Space** | Room location |
| **Parent Asset** | Parent asset |
| **QR Code** | QR code identifier |
| **Image URLs** | Asset photos |

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
| **Asset Tag** | Must be unique within organization if provided |
| **Status** | Must be one of: ACTIVE, INACTIVE, MAINTENANCE, RETIRED |

## Next Steps

- [Workflows](/docs/resources/assets/workflows) - How to use these fields
- [Examples](/docs/resources/assets/examples) - Real-world usage
- [Best Practices](/docs/resources/assets/best-practices) - Tips and recommendations

