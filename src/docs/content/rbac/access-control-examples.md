# Access Control Examples

Real-world examples of how RBAC and assignments work in FaciliScope.

## Example 1: Work Order Access

### Scenario
Work order "Repair HVAC Unit" is assigned to:
- MANAGER: John Smith
- SUPERVISOR: Mike Johnson
- TECHNICIAN: Sarah Williams

### Access by Role

**ROOT/ADMIN**:
- ✅ Can see the work order (sees all)
- ✅ Can edit the work order
- ✅ Can delete the work order
- ✅ Can assign/unassign users

**MANAGER (John Smith - assigned)**:
- ✅ Can see the work order (sees all + assigned)
- ✅ Can edit the work order
- ✅ Can delete the work order
- ✅ Can assign/unassign users

**MANAGER (Other managers - not assigned)**:
- ✅ Can see the work order (sees all)
- ✅ Can edit the work order
- ✅ Can delete the work order
- ✅ Can assign/unassign users

**SUPERVISOR (Mike Johnson - assigned)**:
- ✅ Can see the work order (sees all + assigned)
- ✅ Can edit the work order
- ✅ Can assign users
- ❌ Cannot delete the work order

**SUPERVISOR (Other supervisors - not assigned)**:
- ✅ Can see the work order (sees all)
- ✅ Can edit the work order
- ❌ Cannot delete the work order

**TECHNICIAN (Sarah Williams - assigned)**:
- ✅ Can see the work order (assigned to her)
- ✅ Can edit the work order (assigned to her)
- ✅ Can track time
- ✅ Can add comments
- ❌ Cannot delete the work order
- ❌ Cannot assign users

**TECHNICIAN (Tom Brown - not assigned)**:
- ❌ Cannot see the work order (not assigned)
- ❌ Cannot edit the work order
- ❌ Cannot access it at all

**ACCOUNTANT**:
- ✅ Can see the work order (sees all for cost analysis)
- ❌ Cannot edit the work order (read-only for costs)
- ✅ Can view costs and time entries

**VIEWER**:
- ❌ Cannot see the work order (not assigned)
- ❌ Cannot access it at all

## Example 2: Asset Access

### Scenario
Asset "HVAC Unit CR-A-001" is assigned to:
- MANAGER: John Smith
- VIEWER: Mary Johnson

### Access by Role

**ROOT/ADMIN**:
- ✅ Can see the asset (sees all)
- ✅ Can edit the asset
- ✅ Can delete the asset
- ✅ Can assign/unassign users

**MANAGER (John Smith - assigned)**:
- ✅ Can see the asset (sees all + assigned)
- ✅ Can edit the asset
- ✅ Can delete the asset
- ✅ Can assign users

**MANAGER (Other managers - not assigned)**:
- ✅ Can see the asset (sees all)
- ✅ Can edit the asset
- ✅ Can delete the asset

**SUPERVISOR**:
- ✅ Can see the asset (sees all)
- ❌ Cannot edit the asset (MANAGER only)
- ❌ Cannot delete the asset

**TECHNICIAN**:
- ❌ Cannot see the asset (not assigned)
- ❌ Cannot access it at all

**ACCOUNTANT**:
- ✅ Can see the asset (sees all for cost analysis)
- ❌ Cannot edit the asset

**VIEWER (Mary Johnson - assigned)**:
- ✅ Can see the asset (assigned to her)
- ❌ Cannot edit the asset (read-only)
- ❌ Cannot delete the asset

**VIEWER (Other viewers - not assigned)**:
- ❌ Cannot see the asset (not assigned)
- ❌ Cannot access it at all

## Example 3: Facility Access

### Scenario
Facility "Main Office Building" is assigned to:
- ADMIN: Jane Doe
- MANAGER: John Smith

### Access by Role

**ROOT/ADMIN (Jane Doe - assigned)**:
- ✅ Can see the facility (sees all + assigned)
- ✅ Can edit the facility
- ✅ Can delete the facility
- ✅ Can assign users

**ADMIN (Other admins - not assigned)**:
- ✅ Can see the facility (sees all)
- ✅ Can edit the facility
- ✅ Can delete the facility

**MANAGER (John Smith - assigned)**:
- ✅ Can see the facility (sees all + assigned)
- ❌ Cannot edit the facility (ADMIN only)
- ❌ Cannot delete the facility

**MANAGER (Other managers - not assigned)**:
- ✅ Can see the facility (sees all)
- ❌ Cannot edit the facility

**SUPERVISOR**:
- ✅ Can see the facility (sees all)
- ❌ Cannot edit the facility

**TECHNICIAN**:
- ❌ Cannot see the facility (not assigned)
- ❌ Cannot access it at all

**ACCOUNTANT**:
- ✅ Can see the facility (sees all)
- ❌ Cannot edit the facility

**VIEWER**:
- ❌ Cannot see the facility (not assigned)
- ❌ Cannot access it at all

## Example 4: Budget Access

### Scenario
Budget "2024 Facility Maintenance Budget" is not assigned to any specific users.

### Access by Role

**ROOT/ADMIN**:
- ✅ Can see the budget (sees all)
- ✅ Can edit the budget
- ✅ Can delete the budget

**MANAGER**:
- ✅ Can see the budget (sees all)
- ❌ Cannot edit the budget (ACCOUNTANT/ADMIN only)
- ❌ Cannot delete the budget

**SUPERVISOR**:
- ❌ Cannot see the budget (no permission)

**TECHNICIAN**:
- ❌ Cannot see the budget (no permission)

**ACCOUNTANT**:
- ✅ Can see the budget (sees all)
- ✅ Can edit the budget
- ❌ Cannot delete the budget (ADMIN only)

**VIEWER**:
- ❌ Cannot see the budget (not assigned and no permission)

## Example 5: Time Entry Access

### Scenario
Time entry on work order "Repair HVAC Unit" tracked by TECHNICIAN Sarah Williams.

### Access by Role

**ROOT/ADMIN/MANAGER**:
- ✅ Can see the time entry (view all)
- ✅ Can edit the time entry
- ✅ Can delete the time entry

**SUPERVISOR**:
- ✅ Can see the time entry (view team)
- ❌ Cannot edit the time entry
- ❌ Cannot delete the time entry

**TECHNICIAN (Sarah Williams - own entry)**:
- ✅ Can see the time entry (view own)
- ❌ Cannot edit the time entry (MANAGER only)
- ❌ Cannot delete the time entry

**TECHNICIAN (Tom Brown - not own entry)**:
- ❌ Cannot see the time entry (not own)

**ACCOUNTANT**:
- ✅ Can see the time entry (view own, for cost analysis)
- ❌ Cannot edit the time entry

**VIEWER**:
- ❌ Cannot see the time entry (no permission)

## Key Takeaways

### Assignment-Level Filtering

1. **TECHNICIAN and VIEWER**: See only assigned resources
2. **ROOT, ADMIN, MANAGER**: See all resources
3. **SUPERVISOR**: Sees all but focuses on team
4. **ACCOUNTANT**: Sees all for cost analysis

### Edit Permissions

1. **Role-Based**: Edit permissions depend on role
2. **Assignment-Based**: For TECHNICIAN, can only edit assigned resources
3. **Resource Type**: Different resources have different edit permissions

### Multiple Assignments

1. **Benefits**: Multiple users can collaborate
2. **Roles Matter**: Each role has different permissions
3. **Access Control**: Assignment grants access for filtered roles

## Next Steps

- [Assignment System](/docs/rbac/assignment-system) - How assignments work
- [Roles Documentation](/docs/rbac/roles) - Detailed role information
- [Permissions Matrix](/docs/rbac/permissions-matrix) - Complete permissions

