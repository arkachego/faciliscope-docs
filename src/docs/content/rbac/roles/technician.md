# TECHNICIAN Role

The TECHNICIAN role provides execution-level access to perform work and update assigned resources.

## Overview

**Role Name**: TECHNICIAN  
**Level**: Execution (Level 3)  
**Primary Function**: Work execution  
**Typical Users**: Maintenance technicians, field workers (20-100+ per organization)

## Key Characteristics

- **Execution Access**: Can perform work and update assigned resources
- **Assignment Filtering**: Sees only assigned resources
- **Work Focus**: Primarily works on assigned work orders
- **Time Tracking**: Can track time on work orders
- **Limited Creation**: Cannot create most resources

## Permissions

### Work Orders
- ❌ Create work orders (MANAGER/SUPERVISOR only)
- ✅ Update assigned work orders
- ❌ Delete work orders
- ✅ View assigned work orders only
- ❌ Assign users (SUPERVISOR/MANAGER only)

### Time Tracking
- ✅ Create time entries (for assigned work)
- ✅ View own time entries
- ❌ View all time entries
- ❌ Update/delete time entries (MANAGER only)

### Maintenance Schedules
- ❌ Create schedules (MANAGER only)
- ❌ Update schedules (MANAGER only)
- ✅ View assigned maintenance schedules only
- ✅ Execute assigned maintenance

### Assets
- ❌ Create assets (MANAGER only)
- ❌ Update assets (MANAGER only)
- ✅ View assigned assets only

### Facilities
- ❌ Create/update facilities
- ✅ View assigned facilities only

### Other Resources
- ✅ View assigned resources only
- ❌ Create/update/delete: Most resources

## Assignment-Level Access

**TECHNICIAN users see ONLY assigned resources**. Assignment-level filtering is applied.

**Example**: If a work order is assigned to TECHNICIAN Sarah, she can see and update it. If not assigned, she cannot see it.

## When to Use TECHNICIAN Role

Use TECHNICIAN role for:
- Maintenance technicians
- Field workers
- Repair staff
- Users who execute work but don't coordinate or manage

## Common Tasks

### Executing Work Orders
1. View assigned work orders
2. Update work order status
3. Add comments and notes
4. Track time
5. Complete work

### Time Tracking
1. Start timer when work begins
2. Stop timer when work ends
3. Add time entry descriptions
4. View own time entries

### Maintenance Execution
1. View assigned maintenance schedules
2. Execute maintenance tasks
3. Complete checklists
4. Document work performed

## Multiple Assignments

TECHNICIANs can be assigned alongside other roles:

**Example Work Order**:
- MANAGER: John (oversight)
- SUPERVISOR: Mike (coordination)
- TECHNICIAN: Sarah (execution)
- TECHNICIAN: Tom (execution)

All assigned TECHNICIANs can work on the order.

## Differences from SUPERVISOR

TECHNICIAN cannot:
- Create work orders
- Assign users
- View all resources (only assigned)
- View team time entries

## Differences from VIEWER

TECHNICIAN has additional capabilities:
- Can update assigned work orders
- Can track time
- Can execute maintenance
- Can add comments

## Next Steps

- [ACCOUNTANT Role](/docs/rbac/roles/accountant) - Financial role
- [VIEWER Role](/docs/rbac/roles/viewer) - Read-only role
- [Permissions Matrix](/docs/rbac/permissions-matrix) - Complete permissions
- [Assignment System](/docs/rbac/assignment-system) - How assignments work

