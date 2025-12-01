# Fields

Complete reference for all budget fields in FaciliScope.

## Core Identification Fields

### Name

| Type | Required | Description |
|------|----------|-------------|
| String | Yes | Name of the budget (1-200 characters). Used for identification and display. Best practice: Use descriptive names (e.g., "2024 Facility Maintenance Budget"). |

### Description

| Type | Required | Description |
|------|----------|-------------|
| String (text area) | No | Detailed description of the budget. Provides context and purpose. Best practice: Include budget purpose and scope. |

## Budget Configuration

### Budget Type

| Type | Required | Description |
|------|----------|-------------|
| Enum (BudgetType) | Yes | Type of budget. Options: **FACILITY** (facility-specific), **DEPARTMENT** (department-specific), **PROJECT** (project-specific), **GLOBAL** (organization-wide). Determines budget scope. |

### Facility

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | No | ID of the facility for facility-type budgets. Links budget to a specific facility. Required for FACILITY budget type. |

### Department

| Type | Required | Description |
|------|----------|-------------|
| String | No | Department name for department-type budgets. Identifies the department. Required for DEPARTMENT budget type. |

## Budget Period

### Start Date

| Type | Required | Description |
|------|----------|-------------|
| DateTime | Yes | Start date of the budget period. Defines when the budget begins. Format: ISO 8601 date-time. |

### End Date

| Type | Required | Description |
|------|----------|-------------|
| DateTime | Yes | End date of the budget period. Defines when the budget ends. Format: ISO 8601 date-time. Best practice: End date must be after start date. |

## Financial Fields

### Total Amount

| Type | Required | Description |
|------|----------|-------------|
| Float (currency) | Yes | Total budgeted amount. The allocated budget amount. Must be positive. Example: 50000.00 for $50,000. |

### Spent Amount

| Type | Required | Description |
|------|----------|-------------|
| Float (calculated) | No | Total amount spent against the budget. Automatically calculated from transactions. Read-only, automatically calculated. |

## Assignment Fields

### Organization ID

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | Yes (system-assigned) | ID of the organization that owns this budget. Multi-tenancy isolation. Automatically set, cannot be changed. |

### Created By ID

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | Yes (system-assigned) | ID of the user who created the budget. Audit trail and ownership. Automatically set to current user. |

### Created At

| Type | Required | Description |
|------|----------|-------------|
| DateTime | Yes (system-assigned) | When the budget was created. Audit trail and reporting. Automatically set, read-only. |

### Updated At

| Type | Required | Description |
|------|----------|-------------|
| DateTime | Yes (system-updated) | When the budget was last updated. Audit trail and change tracking. Automatically updated, read-only. |

## Related Resources (Relations)

| Relation Name | Type | Description |
|---------------|------|-------------|
| Organization | Organization object | Organization that owns the budget. Provides organization details. |
| Facility | Facility object | Full facility information for facility-type budgets. Provides facility details. |
| Created By | User object | User who created the budget. Shows who created the budget. |
| Items | BudgetItem[] array | All budget items (categories). Shows budget breakdown by category. |
| Transactions | BudgetTransaction[] array | All budget transactions. Shows spending history and adjustments. |

## Field Categories

### Required Fields

| Field Name | Description |
|---|---|
| **Name** | Budget name |
| **Budget Type** | Type of budget |
| **Start Date** | Budget start date |
| **End Date** | Budget end date |
| **Total Amount** | Budgeted amount |

### Recommended Fields

| Field Name | Description |
|---|---|
| **Description** | Detailed description |
| **Facility** | Facility (for facility-type budgets) |
| **Department** | Department (for department-type budgets) |

### Optional Fields

| Field Name | Description |
|---|---|
| **Spent Amount** | Calculated automatically |

### System Fields (Read-Only)

| Field Name | Description |
|---|---|
| **Organization ID** | System-assigned |
| **Created By ID** | System-assigned |
| **Created At** | System-assigned |
| **Updated At** | Auto-updated |
| **Spent Amount** | Auto-calculated |

## Validation Rules

| Field Name | Rule |
|---|---|
| **Name** | 1-200 characters, required |
| **Start Date** | Must be before end date |
| **End Date** | Must be after start date |
| **Total Amount** | Must be positive number, required |
| **Facility** | Required for FACILITY budget type |
| **Department** | Required for DEPARTMENT budget type |

## Next Steps

- [Workflows](/docs/resources/budgets/workflows) - How to use these fields
- [Examples](/docs/resources/budgets/examples) - Real-world usage
- [Best Practices](/docs/resources/budgets/best-practices) - Tips and recommendations

