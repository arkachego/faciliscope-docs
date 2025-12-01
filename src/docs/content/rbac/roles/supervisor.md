# SUPERVISOR Role

The SUPERVISOR role provides supervisory access to coordinate team activities and oversee work execution.

## Overview

**Role Name**: SUPERVISOR  
**Level**: Supervisory (Level 4)  
**Primary Function**: Team supervision and coordination  
**Typical Users**: Team leaders, shift supervisors (10-30 per organization)

## Key Characteristics

- **Supervisory Access**: Can coordinate team activities and assign work
- **Full Visibility**: Sees all resources (focuses on team assignments)
- **Work Coordination**: Assigns and monitors work orders
- **Limited Management**: Cannot delete resources or manage facilities
- **Team Focus**: Primarily works with assigned team members

## Permissions

### Work Orders
- ✅ Create work orders
- ✅ Update work orders
- ❌ Delete work orders (MANAGER only)
- ✅ View all work orders
- ✅ Assign users to work orders

### Assets
- ❌ Create assets (MANAGER only)
- ❌ Update assets (MANAGER only)
- ❌ Delete assets (MANAGER only)
- ✅ View all assets

### Maintenance Schedules
- ❌ Create schedules (MANAGER only)
- ❌ Update schedules (MANAGER only)
- ❌ Delete schedules (MANAGER only)
- ✅ View all maintenance schedules
- ✅ Execute maintenance

### Time Tracking
- ✅ Create time entries
- ✅ View team time entries
- ❌ View all time entries (MANAGER only)
- ❌ Update/delete time entries (MANAGER only)

### Other Resources
- ✅ View all: Facilities, Budgets, Purchase Orders, Documents, Inventory
- ❌ Create/update/delete: Most resources (limited permissions)

## Assignment-Level Access

**SUPERVISOR users see ALL resources** but typically focus on team assignments. No strict filtering, but workflow focuses on team.

## When to Use SUPERVISOR Role

Use SUPERVISOR role for:
- Team leaders
- Shift supervisors
- Coordinators
- Users who supervise teams but don't need full management access

## Common Tasks

### Coordinating Work
1. Review assigned work orders
2. Assign work to team members
3. Monitor progress
4. Update status

### Team Management
1. View team time entries
2. Monitor team performance
3. Coordinate schedules
4. Communicate with team

### Work Execution
1. Execute maintenance schedules
2. Update work order status
3. Add comments and notes
4. Track progress

## Differences from MANAGER

SUPERVISOR cannot:
- Delete work orders or assets
- Create/update/delete maintenance schedules
- Create/update assets
- View all time entries (only team)

## Differences from TECHNICIAN

SUPERVISOR has additional capabilities:
- Can create work orders
- Can assign users
- Can view all resources
- Coordinates team activities

## Next Steps

- [TECHNICIAN Role](/docs/rbac/roles/technician) - Execution role
- [Permissions Matrix](/docs/rbac/permissions-matrix) - Complete permissions
- [RBAC Overview](/docs/rbac/overview) - RBAC introduction

