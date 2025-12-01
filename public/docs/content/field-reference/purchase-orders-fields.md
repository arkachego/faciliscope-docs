# Fields

Complete reference for all purchase order fields in FaciliScope.

## Core Identification Fields

### Order Number

| Type | Required | Description |
|------|----------|-------------|
| String (auto-generated) | Yes (system-generated) | Unique identifier automatically assigned to each purchase order. Format: Alphanumeric (e.g., "PO-2024-001"). Used for tracking, reference, and communication. Cannot be changed after creation. |

## Vendor Information

### Vendor

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | Yes | ID of the vendor/supplier. Links purchase order to a vendor. Required for procurement tracking. |

## Status and Dates

### Status

| Type | Required | Description |
|------|----------|-------------|
| Enum (PurchaseOrderStatus) | Yes | Current status of the purchase order. Options: **DRAFT** (being created), **PENDING** (awaiting approval), **APPROVED** (approved, ready to order), **ORDERED** (sent to vendor), **RECEIVED** (items received), **CANCELLED** (cancelled). Default: DRAFT. Best practice: Keep status current. |

### Order Date

| Type | Required | Description |
|------|----------|-------------|
| DateTime | No | Date when the order was placed with the vendor. Tracks when order was sent. Format: ISO 8601 date-time. |

### Expected Delivery Date

| Type | Required | Description |
|------|----------|-------------|
| DateTime | No | Expected date when items will be delivered. Helps with planning and tracking. Format: ISO 8601 date-time. |

### Received Date

| Type | Required | Description |
|------|----------|-------------|
| DateTime | No | Date when items were actually received. Tracks delivery completion. Format: ISO 8601 date-time. Automatically set when status changes to RECEIVED. |

## Financial Fields

### Total Amount

| Type | Required | Description |
|------|----------|-------------|
| Float (currency) | Yes | Total amount of the purchase order. Automatically calculated from items. Default: 0. Example: 1500.00 for $1,500. |

### Currency

| Type | Required | Description |
|------|----------|-------------|
| String | Yes | Currency code for the purchase order. Default: USD. Format: ISO 4217 currency code (USD, EUR, etc.). |

## Additional Information

### Notes

| Type | Required | Description |
|------|----------|-------------|
| String (text area) | No | Additional notes, instructions, or special requirements. Stores supplementary information. Example: "Rush delivery required". |

## Approval Fields

### Approved By ID

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | No | ID of the user who approved the purchase order. Tracks approval. Automatically set when order is approved. |

## System Fields

### Organization ID

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | Yes (system-assigned) | ID of the organization that owns this purchase order. Multi-tenancy isolation. Automatically set, cannot be changed. |

### Created By ID

| Type | Required | Description |
|------|----------|-------------|
| String (UUID) | Yes (system-assigned) | ID of the user who created the purchase order. Audit trail and ownership. Automatically set to current user. |

### Created At

| Type | Required | Description |
|------|----------|-------------|
| DateTime | Yes (system-assigned) | When the purchase order was created. Audit trail and reporting. Automatically set, read-only. |

### Updated At

| Type | Required | Description |
|------|----------|-------------|
| DateTime | Yes (system-updated) | When the purchase order was last updated. Audit trail and change tracking. Automatically updated, read-only. |

## Related Resources (Relations)

| Relation Name | Type | Description |
|---------------|------|-------------|
| Organization | Organization object | Organization that owns the purchase order. Provides organization details. |
| Vendor | Vendor object | Full vendor information including name, contact info, and type. Provides vendor details. |
| Created By | User object | User who created the purchase order. Shows who created the order. |
| Approved By | User object | User who approved the purchase order. Shows who approved the order. |
| Items | PurchaseOrderItem[] array | All items in the purchase order. Shows line items with quantities and prices. |

## Field Categories

### Required Fields

| Field Name | Description |
|---|---|
| **Order Number** | Auto-generated |
| **Vendor** | Vendor ID |
| **Status** | Current status |
| **Total Amount** | Order total |
| **Currency** | Currency code |

### Recommended Fields

| Field Name | Description |
|---|---|
| **Order Date** | Order placement date |
| **Expected Delivery Date** | Expected delivery |
| **Notes** | Additional notes |

### Optional Fields

| Field Name | Description |
|---|---|
| **Received Date** | Delivery date |
| **Approved By ID** | Approver (auto-set) |

### System Fields (Read-Only)

| Field Name | Description |
|---|---|
| **Organization ID** | System-assigned |
| **Created By ID** | System-assigned |
| **Created At** | System-assigned |
| **Updated At** | Auto-updated |
| **Order Number** | Auto-generated |

## Validation Rules

| Field Name | Rule |
|---|---|
| **Vendor** | Must be valid vendor ID, required |
| **Total Amount** | Must be positive number, default 0 |
| **Currency** | Must be valid ISO 4217 code, default USD |
| **Status** | Must be one of: DRAFT, PENDING, APPROVED, ORDERED, RECEIVED, CANCELLED |

## Next Steps

- [Workflows](/docs/resources/purchase-orders/workflows) - How to use these fields
- [Examples](/docs/resources/purchase-orders/examples) - Real-world usage
- [Best Practices](/docs/resources/purchase-orders/best-practices) - Tips and recommendations

