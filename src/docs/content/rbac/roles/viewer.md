# VIEWER Role

The VIEWER role provides read-only access to view assigned resources.

## Overview

**Role Name**: VIEWER  
**Level**: Read-Only (Level 1)  
**Primary Function**: Read-only access  
**Typical Users**: Stakeholders, auditors, external consultants (5-20 per organization)

## Key Characteristics

- **Read-Only Access**: Can view but cannot edit resources
- **Assignment Filtering**: Sees only assigned resources
- **Limited Permissions**: Minimal permissions for viewing only
- **Stakeholder Access**: Designed for stakeholders who need visibility
- **No Actions**: Cannot perform any actions except viewing

## Permissions

### Work Orders
- ❌ Create work orders
- ❌ Update work orders
- ❌ Delete work orders
- ✅ View assigned work orders only
- ❌ Assign users

### Assets
- ❌ Create/update/delete assets
- ✅ View assigned assets only

### Facilities
- ❌ Create/update/delete facilities
- ✅ View assigned facilities only

### Maintenance Schedules
- ❌ Create/update/delete schedules
- ✅ View assigned maintenance schedules only

### Budgets
- ❌ Create/update/delete budgets
- ✅ View assigned budgets only

### Other Resources
- ✅ View assigned resources only
- ❌ Create/update/delete: All resources

### Time Tracking
- ❌ Create time entries
- ❌ View time entries
- ❌ Update/delete time entries

## Assignment-Level Access

**VIEWER users see ONLY assigned resources**. Assignment-level filtering is strictly applied.

**Example**: If an asset is assigned to VIEWER Mary, she can view it. If not assigned, she cannot see it.

## When to Use VIEWER Role

Use VIEWER role for:
- Stakeholders who need visibility
- Auditors
- External consultants
- Users who need read-only access
- Temporary access scenarios

## Common Tasks

### Viewing Resources
1. View assigned work orders
2. View assigned assets
3. View assigned facilities
4. Review assigned budgets

### Reporting
1. View resource details
2. Review status and history
3. Access assigned documents
4. Review compliance records

## Multiple Assignments

VIEWERs can be assigned alongside other roles:

**Example Asset**:
- MANAGER: John (management)
- VIEWER: Mary (stakeholder visibility)

Both can access the asset based on their role permissions.

## Differences from TECHNICIAN

VIEWER cannot:
- Update work orders
- Track time
- Execute maintenance
- Add comments

VIEWER can only:
- View assigned resources
- Read information

## Differences from ACCOUNTANT

VIEWER cannot:
- View all resources (only assigned)
- Manage budgets
- Access financial analytics

## Security Considerations

- **Read-Only**: VIEWERs cannot modify any data
- **Assignment Required**: Must be assigned to see resources
- **Audit Trail**: VIEWER access is logged
- **Limited Scope**: Only sees assigned resources

## Next Steps

- [RBAC Overview](/docs/rbac/overview) - RBAC introduction
- [Permissions Matrix](/docs/rbac/permissions-matrix) - Complete permissions
- [Assignment System](/docs/rbac/assignment-system) - How assignments work

