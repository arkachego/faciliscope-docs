# ROOT Role

The ROOT role has the highest level of access in FaciliScope, with complete system control.

## Overview

**Role Name**: ROOT  
**Level**: Highest (Level 7)  
**Primary Function**: System administration and complete control  
**Typical Users**: IT administrators, system owners (1-2 per organization)

## Key Characteristics

- **Full System Access**: Can access and modify all resources
- **User Management**: Can create, update, and delete all users
- **Role Management**: Can change any user's role (including other ROOT users)
- **System Configuration**: Can configure all system settings
- **No Restrictions**: No assignment-level filtering, sees all resources
- **Single ROOT per Organization**: Only one ROOT user exists per organization at a time
- **Privilege Transfer**: ROOT can transfer its ROOT privilege to an ADMIN user, making that ADMIN become ROOT and the ROOT become ADMIN

## Permissions

### User Management
- ✅ Create users (all roles including ROOT)
- ✅ Update users
- ✅ Delete users
- ✅ View all users
- ✅ Change any user's role (including to/from ROOT)

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

### System Administration
- ✅ Manage all users and roles
- ✅ Configure system settings
- ✅ Access system logs
- ✅ Manage organizations

## Assignment-Level Access

**ROOT users see ALL resources** regardless of assignments. No filtering is applied.

## When to Use ROOT Role

Use ROOT role for:
- IT administrators
- System owners
- Users who need complete system control
- Emergency access scenarios

**Best Practice**: There should be only **one ROOT user per organization**. ROOT can transfer its privilege to an ADMIN if needed.

## Security Considerations

- **Highest Privilege**: ROOT has complete system access
- **Role Changes**: Only ROOT can change other users to/from ROOT
- **Audit Trail**: All ROOT actions are logged
- **Limited Users**: Should be very few ROOT users

## Common Tasks

### Managing Users
1. Navigate to Users
2. Create, update, or delete users
3. Change user roles as needed
4. Manage user permissions

### System Configuration
1. Access system settings
2. Configure organization settings
3. Manage integrations
4. Configure security settings

### Emergency Access
1. Access any resource
2. Override restrictions if needed
3. Fix system issues
4. Restore access if needed

## Differences from ADMIN

ROOT has additional capabilities:
- Can change any user's role (including to/from ROOT)
- Can create other ROOT users
- Has complete system control
- No restrictions whatsoever

## Next Steps

- [ADMIN Role](/docs/rbac/roles/admin) - Administrative role
- [Permissions Matrix](/docs/rbac/permissions-matrix) - Complete permissions
- [RBAC Overview](/docs/rbac/overview) - RBAC introduction

