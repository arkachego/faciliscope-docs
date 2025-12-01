# RBAC Overview

Role-Based Access Control (RBAC) is the security model used in FaciliScope to manage user access and permissions.

## What is RBAC?

Role-Based Access Control (RBAC) is a security approach that restricts access to resources based on user roles. Instead of assigning permissions to individual users, permissions are assigned to roles, and users are assigned roles.

## Why RBAC?

### Benefits

1. **Simplified Management**
   - Manage permissions by role, not by user
   - Add/remove users without changing permissions
   - Consistent access control

2. **Security**
   - Principle of least privilege
   - Clear separation of duties
   - Audit trail of access

3. **Scalability**
   - Easy to add new users
   - Easy to create new roles if needed
   - Supports organizational growth

4. **Compliance**
   - Enforces access policies
   - Supports compliance requirements
   - Provides audit capabilities

## How RBAC Works in FaciliScope

### Role Hierarchy

FaciliScope has 7 distinct roles arranged in a hierarchy:

```
ROOT (Highest)
  ↓
ADMIN
  ↓
MANAGER
  ↓
SUPERVISOR
  ↓
TECHNICIAN
  ↓
ACCOUNTANT
  ↓
VIEWER (Lowest)
```

**Note**: Higher roles generally have more permissions than lower roles, but each role has specific capabilities.

### Permission System

**Permissions** are specific actions users can perform:
- `WORK_ORDERS_CREATE` - Create work orders
- `WORK_ORDERS_UPDATE` - Update work orders
- `ASSETS_VIEW` - View assets
- `BUDGETS_CREATE` - Create budgets
- etc.

**Roles** have collections of permissions:
- MANAGER has `WORK_ORDERS_CREATE`, `WORK_ORDERS_UPDATE`, etc.
- TECHNICIAN has `WORK_ORDERS_UPDATE` (for assigned only), etc.

### Assignment-Level Filtering

**Key Feature**: Users with lower roles (SUPERVISOR, TECHNICIAN, ACCOUNTANT, VIEWER) can only see resources assigned to them.

**Examples**:
- TECHNICIAN sees only work orders assigned to them
- VIEWER sees only assets assigned to them
- ACCOUNTANT sees all work orders (for cost analysis) but may have limited edit permissions

**Exceptions**:
- ROOT and ADMIN see all resources
- MANAGER sees all resources
- SUPERVISOR sees all resources (but focuses on team assignments)

### Multiple User Assignments

FaciliScope supports assigning multiple users to a single resource:

**Work Orders**:
- Can assign MANAGER, SUPERVISOR, and TECHNICIAN simultaneously
- All assigned users can view and work on the order

**Assets**:
- Can assign MANAGER and VIEWER
- Both can access the asset

**Facilities**:
- Can assign multiple users with different roles
- Each sees the facility based on their role permissions

## Role Overview

### ROOT
- **Highest level access**
- Full system control
- Can manage all resources
- Can manage users and roles
- Typically 1-2 users per organization

### ADMIN
- **Administrative access**
- Manage most resources
- Manage users (except ROOT)
- Configure system settings
- Typically 2-5 users per organization

### MANAGER
- **Management access**
- Create and manage work orders
- Manage assets and facilities
- View all resources
- Coordinate operations
- Typically 5-15 users per organization

### SUPERVISOR
- **Supervisory access**
- Coordinate team activities
- View all resources
- Focus on team assignments
- Typically 10-30 users per organization

### TECHNICIAN
- **Execution access**
- Execute work orders
- View assigned resources only
- Track time
- Update assigned work
- Typically 20-100+ users per organization

### ACCOUNTANT
- **Financial access**
- View all resources (for cost analysis)
- Manage budgets
- View financial data
- Limited edit permissions
- Typically 1-5 users per organization

### VIEWER
- **Read-only access**
- View assigned resources only
- No edit permissions
- Typically for stakeholders, auditors
- Typically 5-20 users per organization

## Permission Categories

### View Permissions
- `*_VIEW` - View resources
- `*_VIEW_ALL` - View all resources (not just assigned)
- `*_VIEW_TEAM` - View team resources
- `*_VIEW_OWN` - View own resources only

### Create Permissions
- `*_CREATE` - Create new resources

### Update Permissions
- `*_UPDATE` - Update existing resources
- `*_ASSIGN` - Assign users to resources

### Delete Permissions
- `*_DELETE` - Delete resources

### Special Permissions
- `USERS_MANAGE` - Manage users
- `BUDGETS_MANAGE` - Manage budgets
- `PURCHASE_ORDERS_APPROVE` - Approve purchase orders
- `COMPLIANCE_MANAGE` - Manage compliance

## Access Control Examples

### Example 1: Work Order Access

**Scenario**: Work order is assigned to TECHNICIAN Sarah

**Who can see it?**
- ROOT: Yes (sees all)
- ADMIN: Yes (sees all)
- MANAGER: Yes (sees all)
- SUPERVISOR: Yes (sees all)
- TECHNICIAN Sarah: Yes (assigned to her)
- TECHNICIAN Tom: No (not assigned)
- ACCOUNTANT: Yes (sees all for cost analysis)
- VIEWER: No (not assigned)

**Who can edit it?**
- ROOT, ADMIN, MANAGER, SUPERVISOR: Yes
- TECHNICIAN Sarah: Yes (assigned to her)
- TECHNICIAN Tom: No
- ACCOUNTANT: No (read-only for cost analysis)
- VIEWER: No (read-only)

### Example 2: Asset Access

**Scenario**: Asset is assigned to MANAGER John and VIEWER Mary

**Who can see it?**
- ROOT, ADMIN, MANAGER: Yes (see all)
- SUPERVISOR: Yes (see all)
- TECHNICIAN: Only if assigned (not in this case)
- ACCOUNTANT: Yes (see all)
- VIEWER Mary: Yes (assigned to her)
- VIEWER Bob: No (not assigned)

**Who can edit it?**
- ROOT, ADMIN, MANAGER John: Yes
- MANAGER others: Yes (MANAGER role)
- SUPERVISOR: Limited (based on permissions)
- TECHNICIAN: No (not assigned)
- ACCOUNTANT: No
- VIEWER Mary: No (read-only)
- VIEWER Bob: No

## Best Practices

1. **Principle of Least Privilege**
   - Assign minimum necessary permissions
   - Use appropriate role for each user
   - Don't over-assign permissions

2. **Role Assignment**
   - Match role to responsibilities
   - Review role assignments regularly
   - Update roles when responsibilities change

3. **Multiple Assignments**
   - Use when beneficial
   - Assign appropriate roles
   - Coordinate between assignees

4. **Regular Audits**
   - Review user roles periodically
   - Remove inactive users
   - Verify access is appropriate

## Next Steps

- [Roles Documentation](/docs/rbac/roles) - Detailed role information
- [Permissions Matrix](/docs/rbac/permissions-matrix) - Complete permissions reference
- [Assignment System](/docs/rbac/assignment-system) - How assignments work
- [Access Control Examples](/docs/rbac/access-control-examples) - More scenarios

