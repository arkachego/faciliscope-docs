# ACCOUNTANT Role

The ACCOUNTANT role provides financial access to manage budgets and analyze costs.

## Overview

**Role Name**: ACCOUNTANT  
**Level**: Financial (Level 2)  
**Primary Function**: Financial management  
**Typical Users**: Finance staff, accountants (1-5 per organization)

## Key Characteristics

- **Financial Access**: Can manage budgets and view financial data
- **Full Visibility**: Sees all resources (for cost analysis)
- **Budget Management**: Can create and update budgets
- **Cost Analysis**: Can view all work orders and costs
- **Limited Editing**: Cannot edit most non-financial resources

## Permissions

### Budgets
- ✅ Create budgets
- ✅ Update budgets
- ❌ Delete budgets (ADMIN only)
- ✅ View all budgets
- ✅ View budget analytics

### Work Orders
- ❌ Create work orders
- ❌ Update work orders
- ✅ View all work orders (for cost analysis)
- ❌ Delete work orders

### Time Tracking
- ❌ Create time entries
- ✅ View own time entries (if tracking own time)
- ✅ View all time entries (for cost analysis)
- ❌ Update/delete time entries

### Purchase Orders
- ❌ Create purchase orders
- ❌ Update purchase orders
- ✅ View all purchase orders (for cost tracking)

### Assets
- ❌ Create/update/delete assets
- ✅ View all assets (for cost analysis)

### Facilities
- ❌ Create/update/delete facilities
- ✅ View all facilities

### Other Resources
- ✅ View all: Documents, Inventory, Vendors, Compliance Records
- ❌ Create/update/delete: Most resources

### Analytics
- ✅ View all analytics
- ✅ Access financial reports
- ✅ Export financial data

## Assignment-Level Access

**ACCOUNTANT users see ALL resources** for cost analysis purposes. No assignment filtering for viewing.

**However**: ACCOUNTANTs typically cannot edit resources (except budgets).

## When to Use ACCOUNTANT Role

Use ACCOUNTANT role for:
- Finance staff
- Accountants
- Budget managers
- Users who need financial access but not operational control

## Common Tasks

### Budget Management
1. Create budgets for periods/projects
2. Allocate budget amounts
3. Track spending vs. budget
4. Analyze budget performance

### Cost Analysis
1. View all work order costs
2. Analyze labor costs
3. Review parts and materials costs
4. Generate cost reports

### Financial Reporting
1. Access financial analytics
2. Generate cost reports
3. Export financial data
4. Monitor spending trends

## Differences from MANAGER

ACCOUNTANT cannot:
- Create/update work orders
- Create/update assets
- Assign users
- Execute maintenance

ACCOUNTANT can:
- Manage budgets
- View all costs
- Access financial analytics

## Differences from VIEWER

ACCOUNTANT has additional capabilities:
- Can create/update budgets
- Can view all resources (not just assigned)
- Can access financial analytics

## Next Steps

- [VIEWER Role](/docs/rbac/roles/viewer) - Read-only role
- [Permissions Matrix](/docs/rbac/permissions-matrix) - Complete permissions
- [RBAC Overview](/docs/rbac/overview) - RBAC introduction

