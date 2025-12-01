# Permissions Matrix

Complete reference of all permissions by role in FaciliScope.

## How to Read This Matrix

- ✅ = Has permission
- ❌ = Does not have permission
- **A** = Assignment-level (only assigned resources)

## User Management

| Permission | ROOT | ADMIN | MANAGER | SUPERVISOR | TECHNICIAN | ACCOUNTANT | VIEWER |
|------------|-----|-------|---------|------------|------------|------------|--------|
| USERS_CREATE | ✅ | ✅* | ❌ | ❌ | ❌ | ❌ | ❌ |
| USERS_UPDATE | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| USERS_DELETE | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| USERS_VIEW | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| USERS_ROLE_CHANGE | ✅ | ✅** | ❌ | ❌ | ❌ | ❌ | ❌ |

\* ADMIN cannot create other ADMIN users (only ROOT can create ADMIN users)  
\** ADMIN cannot change its own role, but can change roles for other users (including other ADMINs)

## Facilities

| Permission | ROOT | ADMIN | MANAGER | SUPERVISOR | TECHNICIAN | ACCOUNTANT | VIEWER |
|------------|-----|-------|---------|------------|------------|------------|--------|
| FACILITIES_CREATE | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| FACILITIES_UPDATE | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| FACILITIES_DELETE | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| FACILITIES_VIEW | ✅ | ✅ | ✅ | ✅ | **A** | ✅ | **A** |
| FACILITIES_ASSIGN | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

## Assets

| Permission | ROOT | ADMIN | MANAGER | SUPERVISOR | TECHNICIAN | ACCOUNTANT | VIEWER |
|------------|-----|-------|---------|------------|------------|------------|--------|
| ASSETS_CREATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| ASSETS_UPDATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| ASSETS_DELETE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| ASSETS_VIEW | ✅ | ✅ | ✅ | ✅ | **A** | ✅ | **A** |
| ASSETS_ASSIGN | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |

## Work Orders

| Permission | ROOT | ADMIN | MANAGER | SUPERVISOR | TECHNICIAN | ACCOUNTANT | VIEWER |
|------------|-----|-------|---------|------------|------------|------------|--------|
| WORK_ORDERS_CREATE | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| WORK_ORDERS_UPDATE | ✅ | ✅ | ✅ | ✅ | **A** | ❌ | ❌ |
| WORK_ORDERS_DELETE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| WORK_ORDERS_ASSIGN | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| WORK_ORDERS_VIEW_ALL | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |
| WORK_ORDERS_VIEW_ASSIGNED | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ |

## Time Tracking

| Permission | ROOT | ADMIN | MANAGER | SUPERVISOR | TECHNICIAN | ACCOUNTANT | VIEWER |
|------------|-----|-------|---------|------------|------------|------------|--------|
| TIME_ENTRIES_CREATE | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| TIME_ENTRIES_VIEW_ALL | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| TIME_ENTRIES_VIEW_TEAM | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| TIME_ENTRIES_VIEW_OWN | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ |
| TIME_ENTRIES_UPDATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| TIME_ENTRIES_DELETE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |

## Budgets

| Permission | ROOT | ADMIN | MANAGER | SUPERVISOR | TECHNICIAN | ACCOUNTANT | VIEWER |
|------------|-----|-------|---------|------------|------------|------------|--------|
| BUDGETS_CREATE | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| BUDGETS_UPDATE | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| BUDGETS_DELETE | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| BUDGETS_VIEW | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | **A** |
| BUDGETS_ANALYTICS | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |

## Purchase Orders

| Permission | ROOT | ADMIN | MANAGER | SUPERVISOR | TECHNICIAN | ACCOUNTANT | VIEWER |
|------------|-----|-------|---------|------------|------------|------------|--------|
| PURCHASE_ORDERS_CREATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| PURCHASE_ORDERS_UPDATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| PURCHASE_ORDERS_DELETE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| PURCHASE_ORDERS_APPROVE | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| PURCHASE_ORDERS_VIEW | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | **A** |

## Maintenance Schedules

| Permission | ROOT | ADMIN | MANAGER | SUPERVISOR | TECHNICIAN | ACCOUNTANT | VIEWER |
|------------|-----|-------|---------|------------|------------|------------|--------|
| MAINTENANCE_SCHEDULES_CREATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| MAINTENANCE_SCHEDULES_UPDATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| MAINTENANCE_SCHEDULES_DELETE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| MAINTENANCE_SCHEDULES_VIEW_ALL | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| MAINTENANCE_SCHEDULES_VIEW_ASSIGNED | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ |
| MAINTENANCE_SCHEDULES_ASSIGN | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| MAINTENANCE_SCHEDULES_EXECUTE | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |

## Compliance Records

| Permission | ROOT | ADMIN | MANAGER | SUPERVISOR | TECHNICIAN | ACCOUNTANT | VIEWER |
|------------|-----|-------|---------|------------|------------|------------|--------|
| COMPLIANCE_CREATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| COMPLIANCE_UPDATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| COMPLIANCE_DELETE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| COMPLIANCE_VIEW | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| COMPLIANCE_MARK_COMPLIANT | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |

## Documents

| Permission | ROOT | ADMIN | MANAGER | SUPERVISOR | TECHNICIAN | ACCOUNTANT | VIEWER |
|------------|-----|-------|---------|------------|------------|------------|--------|
| DOCUMENTS_CREATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| DOCUMENTS_UPDATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| DOCUMENTS_DELETE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| DOCUMENTS_VIEW | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| DOCUMENTS_UPLOAD | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| DOCUMENTS_DOWNLOAD | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## Inventory

| Permission | ROOT | ADMIN | MANAGER | SUPERVISOR | TECHNICIAN | ACCOUNTANT | VIEWER |
|------------|-----|-------|---------|------------|------------|------------|--------|
| INVENTORY_CREATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| INVENTORY_UPDATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| INVENTORY_DELETE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| INVENTORY_VIEW | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| INVENTORY_ADJUST | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |

## Vendors

| Permission | ROOT | ADMIN | MANAGER | SUPERVISOR | TECHNICIAN | ACCOUNTANT | VIEWER |
|------------|-----|-------|---------|------------|------------|------------|--------|
| VENDORS_CREATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| VENDORS_UPDATE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| VENDORS_DELETE | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| VENDORS_VIEW | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |

## Analytics

| Permission | ROOT | ADMIN | MANAGER | SUPERVISOR | TECHNICIAN | ACCOUNTANT | VIEWER |
|------------|-----|-------|---------|------------|------------|------------|--------|
| ANALYTICS_VIEW_ALL | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| ANALYTICS_VIEW_TEAM | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| ANALYTICS_VIEW_OWN | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |

## Key Notes

### ROOT Role

- **ROOT has ALL privileges** - Complete system access
- **Only one ROOT user per Organization** - There can only be one ROOT user at a time
- **ROOT can transfer privilege** - ROOT can transfer its ROOT privilege to an ADMIN user, making that ADMIN become ROOT and the ROOT become ADMIN

### ADMIN Role

- **ADMIN has all privileges EXCEPT**:
  1. **Cannot change its own role** - ADMIN cannot modify its own role, but can change roles for other users (including other ADMINs)
  2. **Cannot create other ADMIN users** - Only ROOT can create ADMIN users. ADMIN can create users with all other roles.

### Assignment-Level Filtering (A)

Resources marked with **A** are subject to assignment-level filtering:
- **TECHNICIAN**: Sees only assigned resources
- **VIEWER**: Sees only assigned resources
- **ACCOUNTANT**: Sees all resources (for cost analysis)
- **SUPERVISOR**: Sees all resources (focuses on team)
- **ROOT, ADMIN, MANAGER**: See all resources

### View Permissions

- **VIEW_ALL**: Can view all resources (no assignment filtering)
- **VIEW_ASSIGNED**: Can view only assigned resources
- **VIEW_TEAM**: Can view team resources
- **VIEW_OWN**: Can view own resources only

### Edit Permissions

- **UPDATE**: Can modify existing resources
- **ASSIGN**: Can assign users to resources
- **DELETE**: Can remove resources

## Next Steps

- [Roles Documentation](/docs/rbac/roles) - Detailed role information
- [Assignment System](/docs/rbac/assignment-system) - How assignments work
- [Access Control Examples](/docs/rbac/access-control-examples) - Real-world scenarios

