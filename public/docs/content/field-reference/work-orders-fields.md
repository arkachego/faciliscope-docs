# Fields

Complete reference for all work order fields in FaciliScope.

## Core Identification Fields

### Work Order Number

| Type | Required | Description |
|------|----------|-------------|
| String (auto-generated) | Yes (system-generated) | Unique identifier automatically assigned to each work order. Format: Alphanumeric (e.g., "WO-2024-001"). Used for tracking, reference, and communication. Cannot be changed after creation. |

### Title

| Type | Required | Description |
|------|----------|-------------|
| String | Yes | Brief, descriptive title of the work order (1-200 characters). Used for quick identification in lists and notifications. Best practice: Be specific and descriptive. |

### Description

| Type | Required | Description |
|------|----------|-------------|
| String (text area) | No | Detailed information about the work needed. Provides context and instructions for technicians. Best practice: Include as much detail as possible. |

## Classification Fields

### Type

| Type | Required | Description |
|------|----------|-------------|
| Enum | Yes | Category of work order. Options: **CORRECTIVE** (repair or fix something broken), **PREVENTIVE** (scheduled maintenance), **INSPECTION** (safety/compliance/quality), **PROJECT** (larger initiative). Categorizes work for reporting and workflow. |

### Priority

| Type | Required | Description |
|------|----------|-------------|
| Enum | Yes | Urgency level. Options: **CRITICAL** (immediate attention, safety risk), **HIGH** (important, affects operations), **MEDIUM** (normal priority, default), **LOW** (minimal impact). Determines response time and resource allocation. |

### Status

| Type | Required | Description |
|------|----------|-------------|
| Enum | Yes | Current state in lifecycle. Options: **OPEN** (created, not assigned), **ASSIGNED** (assigned but not started), **IN_PROGRESS** (work actively being performed), **ON_HOLD** (temporarily paused), **COMPLETED** (finished, awaiting review), **CLOSED** (finalized), **CANCELLED** (cancelled). Default: OPEN. Best practice: Keep status current. |

## Assignment Fields

### Assigned Users

| Type | Required | Description |
|------|----------|-------------|
| Array of User IDs | No | Array of user IDs assigned to this work order. Supports multiple user assignments (MANAGER, SUPERVISOR, TECHNICIAN). All assigned users can view and update the work order. Best practice: Assign appropriate users based on work complexity. |

### Assignments (Relation)

| Type | Required | Description |
|------|----------|-------------|
| WorkOrderAssignment[] | Auto | Full assignment records with user details including user information, role, assignment date, and assigned by. Automatically populated when viewing work order. |

## Location Fields

### Facility

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | No | ID of the facility where work is located. Links work order to a specific facility. Best practice: Always specify facility for better organization. |

### Asset

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | No | ID of the asset that needs work. Links work order to a specific asset. Best practice: Link to asset when applicable for history tracking. |

## Scheduling Fields

### Due Date

| Type | Required | Description |
|------|----------|-------------|
| DateTime | No | Target completion date and time. Sets deadline for work completion. Format: ISO 8601 date-time. Best practice: Set realistic deadlines based on priority and complexity. |

### Estimated Hours

| Type | Required | Description |
|------|----------|-------------|
| Float (decimal) | No | Expected time to complete the work (in hours). Helps with planning and scheduling. Example: 2.5 (for 2 hours and 30 minutes). Best practice: Base on experience and complexity. |

### Actual Hours

| Type | Required | Description |
|------|----------|-------------|
| Float (calculated) | No | Actual time spent on work, calculated from time entries. Tracks actual vs. estimated time. Read-only, automatically calculated. |

## Cost Fields

### Labor Cost

| Type | Required | Description |
|------|----------|-------------|
| Float (calculated) | No | Total labor cost, calculated from time entries and hourly rates. Tracks labor expenses. Read-only, automatically calculated. |

### Parts Cost

| Type | Required | Description |
|------|----------|-------------|
| Float (calculated) | No | Total cost of parts and materials used. Tracks material expenses. Read-only, automatically calculated from parts relation. |

## SLA Fields

### SLA Definition

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | No | ID of the SLA definition that applies to this work order. Links work order to service level agreement. System-assigned based on SLA rules. |

### SLA Response Deadline

| Type | Required | Description |
|------|----------|-------------|
| DateTime | No | Deadline for responding to the work order (from SLA). Tracks SLA compliance. Read-only, automatically calculated from SLA definition. |

### SLA Resolution Deadline

| Type | Required | Description |
|------|----------|-------------|
| DateTime | No | Deadline for resolving the work order (from SLA). Tracks SLA compliance. Read-only, automatically calculated from SLA definition. |

### SLA Status

| Type | Required | Description |
|------|----------|-------------|
| Enum | No | Current SLA compliance status. Options: **ON_TIME** (within SLA deadlines), **AT_RISK** (approaching deadline), **BREACHED** (past deadline). Read-only, automatically updated by system. |

## Vendor Fields

### Vendor

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | No | ID of external vendor/contractor performing work. Tracks external service providers. Best practice: Use for outsourced work. |

## Additional Fields

### Notes

| Type | Required | Description |
|------|----------|-------------|
| String (text area) | No | Additional notes, observations, or instructions. Stores supplementary information. Use for any additional context or special instructions. |

### Attachments

| Type | Required | Description |
|------|----------|-------------|
| Array of Strings (URLs) | No | URLs of attached files, photos, or documents. Stores references to attached files. Best practice: Include before/after photos, manuals, diagrams. |

## System Fields

### Organization ID

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | Yes (system-assigned) | ID of the organization that owns this work order. Multi-tenancy isolation. Automatically set, cannot be changed. |

### Created By

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | Yes (system-assigned) | ID of the user who created the work order. Audit trail and ownership. Automatically set to current user. |

### Created At

| Type | Required | Description |
|------|----------|-------------|
| DateTime | Yes (system-assigned) | When the work order was created. Audit trail and reporting. Automatically set, read-only. |

### Updated At

| Type | Required | Description |
|------|----------|-------------|
| DateTime | Yes (system-updated) | When the work order was last updated. Audit trail and change tracking. Automatically updated, read-only. |

### Completed At

| Type | Required | Description |
|------|----------|-------------|
| DateTime | No | When the work order was completed. Tracks completion time for reporting. Automatically set when status changes to "COMPLETED". System-set, read-only. |

## Related Resources (Relations)

| Relation Name | Type | Description |
|---------------|------|-------------|
| Facility | Facility object | Full facility information including name, address, and status. Provides facility details in work order view. |
| Asset | Asset object | Full asset information including name, tag, specifications, and location. Provides asset details in work order view. |
| Created By | User object | User who created the work order. Includes name, email, and role. Shows who created the work order. |
| Assignments | WorkOrderAssignment[] array | All user assignments with details. Includes user info, role, assignment date, and assigned by. Shows all assigned users and their roles. |
| Vendor | Vendor object | Vendor/contractor information. Includes name, contact info, and type. Shows vendor details. |
| Comments | WorkOrderComment[] array | All comments on the work order. Includes comment text, author, and timestamp. Communication and documentation. |
| Time Entries | TimeEntry[] array | All time entries for this work order. Includes start/end time, duration, user, and cost. Tracks labor time and costs. |
| Parts | WorkOrderPart[] array | All parts/materials used. Includes inventory item, quantity, and cost. Tracks material usage and costs. |

## Field Categories

### Required Fields
- **Title** - Work order title
- **Type** - Work order type
- **Priority** - Priority level
- **Status** - Current status

### Recommended Fields
- **Description** - Detailed description
- **Facility** - Facility location
- **Asset** - Asset being worked on
- **Due Date** - Completion deadline
- **Assigned Users** - User assignments

### Optional Fields
- **Estimated Hours** - Time estimate
- **Vendor** - External contractor
- **Notes** - Additional notes
- **Attachments** - Attached files

### Calculated Fields (Read-Only)
- **Work Order Number** - Auto-generated
- **Actual Hours** - From time entries
- **Labor Cost** - From time entries
- **Parts Cost** - From parts used
- **SLA Response Deadline** - From SLA definition
- **SLA Resolution Deadline** - From SLA definition
- **SLA Status** - System-calculated
- **Completed At** - Set when completed
- **Created At** - Set on creation
- **Updated At** - Auto-updated

## Field Dependencies

- **SLA Fields**: Automatically populated when SLA Definition is set
- **Actual Hours**: Calculated from Time Entries relation
- **Labor Cost**: Calculated from Time Entries and user hourly rates
- **Parts Cost**: Calculated from Parts relation
- **Completed At**: Set when Status changes to "COMPLETED"

## Validation Rules

- **Title**: 1-200 characters, required
- **Description**: Optional, no length limit
- **Estimated Hours**: Must be positive number if provided
- **Due Date**: Must be future date if provided
- **Assigned Users**: Must be valid user IDs in organization

## Next Steps

- [Workflows](/docs/resources/work-orders/workflows) - How to use these fields
- [Examples](/docs/resources/work-orders/examples) - Real-world usage
- [Field Reference](/docs/field-reference) - All resource fields
