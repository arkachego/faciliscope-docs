# Assignment System

The assignment system in FaciliScope allows multiple users to be assigned to a single resource, enabling collaboration and role-based access.

## Overview

FaciliScope supports **multiple user assignments** to resources. This means:
- A work order can have a MANAGER, SUPERVISOR, and TECHNICIAN assigned simultaneously
- An asset can have a MANAGER and VIEWER assigned
- A facility can have multiple users with different roles

## How Assignments Work

### Assignment Structure

Each assignment includes:
- **Resource**: The resource being assigned (work order, asset, facility, etc.)
- **User**: The user being assigned
- **Role**: The user's role (for context)
- **Assigned At**: When the assignment was made
- **Assigned By**: Who made the assignment

### Assignment Tables

FaciliScope uses separate assignment tables:
- `work_order_assignments` - For work order assignments
- `asset_assignments` - For asset assignments
- `facility_assignments` - For facility assignments
- `maintenance_schedule_assignments` - For maintenance schedule assignments

## Multiple User Assignments

### Example: Work Order with Multiple Assignments

**Work Order**: "Repair HVAC Unit - Conference Room A"

**Assignments**:
- MANAGER: John Smith (oversight)
- SUPERVISOR: Mike Johnson (coordination)
- TECHNICIAN: Sarah Williams (execution)
- TECHNICIAN: Tom Brown (execution)

**Result**: All four users can:
- View the work order
- Update status (based on role permissions)
- Add comments
- Track time (TECHNICIANs)
- View progress

### Example: Asset with Multiple Assignments

**Asset**: "HVAC Unit CR-A-001"

**Assignments**:
- MANAGER: John Smith (management)
- VIEWER: Mary Johnson (stakeholder visibility)

**Result**:
- MANAGER can view and edit the asset
- VIEWER can only view the asset (read-only)

## Assignment-Level Filtering

### Who Sees What?

**ROOT, ADMIN, MANAGER**:
- See ALL resources
- No assignment filtering
- Can access any resource

**SUPERVISOR**:
- See ALL resources
- Focuses on team assignments
- No strict filtering

**TECHNICIAN, VIEWER**:
- See ONLY assigned resources
- Assignment-level filtering applied
- Cannot see unassigned resources

**ACCOUNTANT**:
- See ALL resources (for cost analysis)
- Can view all work orders, assets, etc.
- Limited edit permissions

### Filtering Logic

When a TECHNICIAN or VIEWER requests resources:

1. **Check Role**: Is user TECHNICIAN or VIEWER?
2. **Check Assignments**: Is user assigned to the resource?
3. **Filter Results**: Show only assigned resources

**Example**:
- TECHNICIAN Sarah requests work orders
- System checks: Is Sarah assigned to each work order?
- Returns: Only work orders where Sarah is assigned

## Creating Assignments

### When Creating a Resource

1. Create the resource (work order, asset, etc.)
2. In the "Assign To" field, select one or more users
3. Save the resource
4. Assignments are created automatically

### Adding Assignments Later

1. Open the resource
2. Go to "Assignments" section
3. Click "Add Assignment"
4. Select user(s)
5. Save

### Removing Assignments

1. Open the resource
2. Go to "Assignments" section
3. Click "Remove" next to the assignment
4. Confirm removal
5. Assignment is removed

## Assignment Permissions

### Who Can Assign Users?

**Work Orders**:
- ROOT, ADMIN, MANAGER, SUPERVISOR can assign

**Assets**:
- ROOT, ADMIN, MANAGER can assign

**Facilities**:
- ROOT, ADMIN can assign

**Maintenance Schedules**:
- ROOT, ADMIN, MANAGER can assign

### Who Can Be Assigned?

Any user in the organization can be assigned, regardless of role.

**Best Practice**: Assign users whose role is appropriate for the resource type.

## Assignment Scenarios

### Scenario 1: Complex Work Order

**Work Order**: Large renovation project

**Assignments**:
- MANAGER: Project oversight
- SUPERVISOR: Daily coordination
- TECHNICIAN: Multiple technicians for different trades

**Benefits**:
- Clear roles and responsibilities
- All stakeholders can see progress
- Coordinated execution

### Scenario 2: Critical Asset

**Asset**: Critical production equipment

**Assignments**:
- MANAGER: Asset management
- SUPERVISOR: Maintenance coordination
- TECHNICIAN: Primary maintenance technician
- VIEWER: Stakeholder visibility

**Benefits**:
- Multiple perspectives
- Stakeholder visibility
- Coordinated maintenance

### Scenario 3: Facility Management

**Facility**: Main office building

**Assignments**:
- ADMIN: Facility administration
- MANAGER: Operations management
- VIEWER: Building owner (read-only)

**Benefits**:
- Administrative control
- Operational management
- Owner visibility

## Best Practices

### 1. Assign Appropriate Roles

- Assign MANAGER for oversight
- Assign SUPERVISOR for coordination
- Assign TECHNICIAN for execution
- Assign VIEWER for stakeholder visibility

### 2. Don't Over-Assign

- Only assign users who need access
- Too many assignments can be confusing
- Focus on essential stakeholders

### 3. Update Assignments

- Remove assignments when no longer needed
- Add assignments when new stakeholders emerge
- Keep assignments current

### 4. Use Multiple Assignments Strategically

- Use for complex work requiring coordination
- Use for resources with multiple stakeholders
- Use for knowledge transfer situations

## Common Questions

### Q: Can I assign a user to a resource they can't normally see?

**A**: Yes, but they will only see it if assigned. Assignment grants access.

### Q: What happens if I remove a user's assignment?

**A**: They lose access to that resource (if they have assignment-level filtering).

### Q: Can a user assign themselves?

**A**: Only if they have assignment permissions for that resource type.

### Q: Can I assign users from different organizations?

**A**: No, assignments are limited to users in the same organization.

## Next Steps

- [Access Control Examples](/docs/rbac/access-control-examples) - Real-world scenarios
- [Roles Documentation](/docs/rbac/roles) - Role details
- [Permissions Matrix](/docs/rbac/permissions-matrix) - Complete permissions

