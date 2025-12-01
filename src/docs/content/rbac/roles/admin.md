# ADMIN Role

The ADMIN role provides administrative access to manage the organization and most resources.

## Overview

**Role Name**: ADMIN  
**Level**: High (Level 6)  
**Primary Function**: Organization administration  
**Typical Users**: Facility managers, operations directors (2-5 per organization)

## Key Characteristics

- **Administrative Access**: Can manage most resources and users
- **User Management**: Can create and manage users (all roles except ADMIN - only ROOT can create ADMIN users)
- **Full Resource Access**: Sees all resources (no assignment filtering)
- **System Configuration**: Can configure organization settings
- **Role Management**: Can change roles for other users (including other ADMINs), but **cannot change its own role**
- **ADMIN Creation Restriction**: Cannot create other ADMIN users (only ROOT can create ADMIN users)

## Permissions

### User Management
- ✅ Create users (all roles except ADMIN - only ROOT can create ADMIN users)
- ✅ Update users
- ✅ Delete users
- ✅ View all users
- ✅ Change roles for other users (including other ADMINs)
- ❌ Change its own role (cannot modify own role)
- ❌ Create other ADMIN users (only ROOT can create ADMIN users)

### Facilities
- ✅ Create facilities
- ✅ Update facilities
- ✅ Delete facilities
- ✅ View all facilities
- ✅ Assign users to facilities

### Assets
- ✅ Create assets
- ✅ Update assets
- ✅ Delete assets
- ✅ View all assets
- ✅ Assign users to assets

### Work Orders
- ✅ Create work orders
- ✅ Update work orders
- ✅ Delete work orders
- ✅ View all work orders
- ✅ Assign users to work orders

### Budgets
- ✅ Create budgets
- ✅ Update budgets
- ✅ Delete budgets
- ✅ View all budgets
- ✅ View budget analytics

### Purchase Orders
- ✅ Create purchase orders
- ✅ Update purchase orders
- ✅ Delete purchase orders
- ✅ Approve purchase orders
- ✅ View all purchase orders

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

### Compliance
- ✅ Create compliance records
- ✅ Update compliance records
- ✅ Delete compliance records
- ✅ View all compliance records
- ✅ Mark records as compliant

### Documents
- ✅ Create documents
- ✅ Update documents
- ✅ Delete documents
- ✅ View all documents
- ✅ Upload documents
- ✅ Download documents

### Inventory
- ✅ Create inventory items
- ✅ Update inventory items
- ✅ Delete inventory items
- ✅ View all inventory
- ✅ Adjust inventory quantities

### Vendors
- ✅ Create vendors
- ✅ Update vendors
- ✅ Delete vendors
- ✅ View all vendors

### Analytics
- ✅ View all analytics
- ✅ Access all reports
- ✅ Export data

## Assignment-Level Access

**ADMIN users see ALL resources** regardless of assignments. No filtering is applied.

## When to Use ADMIN Role

Use ADMIN role for:
- Facility managers
- Operations directors
- Department heads
- Users who need administrative control (but not ROOT)

**Best Practice**: Limit ADMIN role to 2-5 users per organization.

## Common Tasks

### Managing Organization
1. Create and manage facilities
2. Set up asset categories
3. Configure maintenance schedules
4. Manage budgets

### User Management
1. Create user accounts
2. Assign roles (except ROOT)
3. Manage user access
4. Deactivate users when needed

### Resource Management
1. Create and manage all resources
2. Assign users to resources
3. Monitor operations
4. Review analytics

## Differences from ROOT

ADMIN cannot:
- Change its own role (but can change roles for other users, including other ADMINs)
- Create other ADMIN users (only ROOT can create ADMIN users)
- Transfer ROOT privilege (only ROOT can transfer its privilege to an ADMIN)
- Access some system-level settings

**Note**: ROOT can transfer its ROOT privilege to an ADMIN user, making that ADMIN become ROOT and the ROOT become ADMIN.

## Differences from MANAGER

ADMIN has additional capabilities:
- Can manage users
- Can delete resources
- Can approve purchase orders
- Has broader administrative access

## Next Steps

- [MANAGER Role](/docs/rbac/roles/manager) - Management role
- [Permissions Matrix](/docs/rbac/permissions-matrix) - Complete permissions
- [RBAC Overview](/docs/rbac/overview) - RBAC introduction

