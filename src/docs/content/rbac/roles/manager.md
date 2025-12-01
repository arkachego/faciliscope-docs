# MANAGER Role

The MANAGER role provides management-level access to coordinate operations and manage resources.

## Overview

**Role Name**: MANAGER  
**Level**: Management (Level 5)  
**Primary Function**: Operations management  
**Typical Users**: Department managers, facility coordinators (5-15 per organization)

## Key Characteristics

- **Management Access**: Can create and manage work orders, assets, and related resources
- **Full Visibility**: Sees all resources (no assignment filtering)
- **Coordination**: Coordinates operations and assigns work
- **Limited Administration**: Cannot manage users or delete some resources
- **Budget Access**: Can view budgets and analytics

## Permissions

### Work Orders
- ✅ Create work orders
- ✅ Update work orders
- ✅ Delete work orders
- ✅ View all work orders
- ✅ Assign users to work orders

### Assets
- ✅ Create assets
- ✅ Update assets
- ✅ Delete assets
- ✅ View all assets
- ✅ Assign users to assets

### Facilities
- ❌ Create facilities (ADMIN only)
- ❌ Update facilities (ADMIN only)
- ❌ Delete facilities (ADMIN only)
- ✅ View all facilities

### Budgets
- ❌ Create budgets (ADMIN/ACCOUNTANT only)
- ❌ Update budgets (ADMIN/ACCOUNTANT only)
- ✅ View all budgets
- ✅ View budget analytics

### Maintenance Schedules
- ✅ Create maintenance schedules
- ✅ Update maintenance schedules
- ✅ Delete maintenance schedules
- ✅ View all maintenance schedules
- ✅ Assign users to schedules
- ✅ Execute maintenance

### Time Tracking
- ✅ Create time entries
- ✅ View all time entries
- ✅ Update time entries
- ✅ Delete time entries

### Purchase Orders
- ✅ Create purchase orders
- ✅ Update purchase orders
- ✅ Delete purchase orders
- ❌ Approve purchase orders (ADMIN only)
- ✅ View all purchase orders

### Other Resources
- ✅ Create/update/delete: Documents, Inventory, Vendors, Compliance Records
- ✅ View all: Analytics, Spaces, Energy Meters

## Assignment-Level Access

**MANAGER users see ALL resources** regardless of assignments. No filtering is applied.

## When to Use MANAGER Role

Use MANAGER role for:
- Department managers
- Facility coordinators
- Operations managers
- Users who need to coordinate work and manage resources

## Common Tasks

### Managing Work Orders
1. Create work orders for maintenance needs
2. Assign work to technicians
3. Monitor work order progress
4. Review completed work

### Managing Assets
1. Create asset records
2. Update asset information
3. Schedule maintenance
4. Track asset history

### Coordinating Operations
1. Review work order status
2. Assign resources
3. Monitor team performance
4. Analyze operations

## Differences from ADMIN

MANAGER cannot:
- Manage users
- Create/update/delete facilities
- Approve purchase orders
- Create/update budgets

## Differences from SUPERVISOR

MANAGER has additional capabilities:
- Can delete work orders and assets
- Can create maintenance schedules
- Has broader resource management

## Next Steps

- [SUPERVISOR Role](/docs/rbac/roles/supervisor) - Supervisory role
- [Permissions Matrix](/docs/rbac/permissions-matrix) - Complete permissions
- [RBAC Overview](/docs/rbac/overview) - RBAC introduction

