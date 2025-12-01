# Roles Overview

FaciliScope has 7 distinct roles, each with specific responsibilities and permissions.

## Role Hierarchy

```
ROOT (Highest Privileges)
  ↓
ADMIN (Administrative)
  ↓
MANAGER (Management)
  ↓
SUPERVISOR (Supervisory)
  ↓
TECHNICIAN (Execution)
  ↓
ACCOUNTANT (Financial)
  ↓
VIEWER (Read-Only)
```

## Quick Reference

| Role | Primary Function | Typical Users | View Access | Edit Access |
|------|-----------------|---------------|-------------|-------------|
| ROOT | System administration | IT administrators | All | All |
| ADMIN | Organization administration | Facility managers | All | Most |
| MANAGER | Operations management | Department managers | All | Work orders, assets |
| SUPERVISOR | Team supervision | Team leaders | All | Team resources |
| TECHNICIAN | Work execution | Maintenance staff | Assigned only | Assigned only |
| ACCOUNTANT | Financial management | Finance staff | All (costs) | Budgets only |
| VIEWER | Read-only access | Stakeholders, auditors | Assigned only | None |

## Role Details

Click on a role below for detailed information:

- [ROOT Role](/docs/rbac/roles/root) - Highest level system access
- [ADMIN Role](/docs/rbac/roles/admin) - Administrative access
- [MANAGER Role](/docs/rbac/roles/manager) - Management access
- [SUPERVISOR Role](/docs/rbac/roles/supervisor) - Supervisory access
- [TECHNICIAN Role](/docs/rbac/roles/technician) - Execution access
- [ACCOUNTANT Role](/docs/rbac/roles/accountant) - Financial access
- [VIEWER Role](/docs/rbac/roles/viewer) - Read-only access

## Assignment-Level Filtering

**Important**: Users with roles below MANAGER have assignment-level filtering:

- **SUPERVISOR**: Sees all resources (but focuses on team)
- **TECHNICIAN**: Sees only assigned resources
- **ACCOUNTANT**: Sees all resources (for cost analysis)
- **VIEWER**: Sees only assigned resources

**ROOT, ADMIN, and MANAGER** see all resources regardless of assignments.

## Multiple User Assignments

Resources can have multiple users assigned with different roles:

**Example - Work Order**:
- MANAGER assigned for oversight
- SUPERVISOR assigned for coordination
- TECHNICIAN assigned for execution

All assigned users can access the resource based on their role permissions.

## Next Steps

- [RBAC Overview](/docs/rbac/overview) - Introduction to RBAC
- [Permissions Matrix](/docs/rbac/permissions-matrix) - Complete permissions reference
- [Assignment System](/docs/rbac/assignment-system) - How assignments work

