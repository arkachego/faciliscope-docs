# Work Orders

Work orders are the central mechanism for managing maintenance tasks, repairs, inspections, and projects in FaciliScope.

## What is a Work Order?

A work order is a formal request or task that needs to be completed. It represents a unit of work that can be assigned, tracked, and completed. Work orders are used for:

- **Corrective Maintenance**: Repairing broken equipment
- **Preventive Maintenance**: Scheduled maintenance tasks
- **Inspections**: Safety or compliance inspections
- **Projects**: Larger initiatives or improvements

## Key Concepts

### Work Order Lifecycle

Work orders progress through several status stages:

1. **Open** - Created but not yet assigned
2. **Assigned** - Assigned to user(s) but work hasn't started
3. **In Progress** - Work is actively being performed
4. **On Hold** - Temporarily paused (waiting for parts, approval, etc.)
5. **Completed** - Work is finished, awaiting final review
6. **Closed** - Finalized and archived

### Work Order Types

**Corrective Maintenance**
- Repairs after equipment failure
- Emergency fixes
- Breakdown maintenance
- Reactive maintenance

**Preventive Maintenance**
- Scheduled maintenance
- Routine servicing
- Regular inspections
- Proactive maintenance

**Inspection**
- Safety inspections
- Compliance audits
- Quality checks
- Condition assessments

**Project**
- Larger initiatives
- Improvements
- Installations
- Renovations

### Priority Levels

**Critical**
- Immediate attention required
- Safety risks or major disruptions
- Response: As soon as possible

**High**
- Important, needs attention soon
- Affects operations
- Response: Within 24-48 hours

**Medium**
- Normal priority
- Minor disruption
- Response: Within a week

**Low**
- Can wait
- Minimal impact
- Response: When convenient

## When to Create a Work Order

Create a work order when:

- Equipment breaks down and needs repair
- Scheduled maintenance is due
- An inspection is required
- A project needs to be executed
- Maintenance is requested
- Compliance requirements need attention

## Multiple User Assignments

FaciliScope supports assigning multiple users to a single work order:

- **MANAGER** - For oversight and coordination
- **SUPERVISOR** - For team coordination and supervision
- **TECHNICIAN** - For actual work execution

**Example**: A complex HVAC repair might have:
- MANAGER assigned for oversight
- SUPERVISOR assigned for coordination
- Multiple TECHNICIANs assigned for execution

All assigned users can:
- View the work order
- Update status
- Add comments
- Track time
- View progress

## Work Order Components

### Basic Information
- **Work Order Number**: Auto-generated unique identifier
- **Title**: Brief description of the work
- **Description**: Detailed information about what needs to be done
- **Type**: Corrective, Preventive, Inspection, or Project
- **Priority**: Critical, High, Medium, or Low
- **Status**: Current state in the lifecycle

### Assignment Information
- **Assigned Users**: One or more users assigned to the work
- **Assigned Roles**: Roles of assigned users (for context)
- **Assignment Date**: When users were assigned

### Location Information
- **Facility**: Which facility the work is for
- **Asset**: Which asset needs work (if applicable)
- **Location**: Specific location within facility

### Scheduling Information
- **Due Date**: Target completion date
- **Estimated Hours**: Expected time to complete
- **Actual Hours**: Time actually spent (calculated from time entries)
- **Created Date**: When work order was created
- **Completed Date**: When work was finished

### Cost Information
- **Labor Cost**: Calculated from time entries and hourly rates
- **Parts Cost**: Cost of materials and parts used
- **Total Cost**: Sum of all costs

### Related Information
- **Vendor**: External contractor (if applicable)
- **Documents**: Attached files, photos, manuals
- **Comments**: Notes and updates from team
- **Time Entries**: Records of time spent
- **Parts Used**: Inventory items consumed

## Work Order Relationships

Work orders connect to many other resources:

- **Assets** - Work performed on assets
- **Facilities** - Work at specific facilities
- **Users** - Assigned technicians and managers
- **Time Entries** - Labor time tracking
- **Inventory** - Parts and materials used
- **Documents** - Photos, manuals, reports
- **Budgets** - Cost tracking
- **SLA Definitions** - Service level monitoring
- **Maintenance Schedules** - Generated from schedules

## Common Operations

### Creating a Work Order

1. Navigate to Work Orders
2. Click "Create Work Order"
3. Fill in required information
4. Assign users (can assign multiple)
5. Set due date and priority
6. Save

### Assigning Users

1. Open work order
2. Use "Assign To" field
3. Select one or more users
4. Users receive notification
5. Work order appears in their assigned list

### Updating Status

1. Open work order
2. Change status dropdown
3. Status updates immediately
4. Relevant users are notified

### Tracking Time

1. Open work order
2. Go to Time Tracking tab
3. Start timer when work begins
4. Stop timer when work ends
5. System calculates labor cost

### Completing Work

1. Finish all work tasks
2. Update status to "Completed"
3. Add final comments
4. Attach completion photos
5. Close work order when finalized

## Role-Based Access

### Who Can View Work Orders?

- **ROOT/ADMIN**: All work orders in organization
- **MANAGER**: All work orders in organization
- **SUPERVISOR**: All work orders (focus on team)
- **TECHNICIAN**: Only assigned work orders
- **VIEWER**: Only assigned work orders (read-only)
- **ACCOUNTANT**: All work orders (for cost analysis)

### Who Can Create Work Orders?

- **ROOT/ADMIN**: Yes
- **MANAGER**: Yes
- **SUPERVISOR**: Yes
- **TECHNICIAN**: No
- **VIEWER**: No
- **ACCOUNTANT**: No

### Who Can Update Work Orders?

- **ROOT/ADMIN**: All work orders
- **MANAGER**: All work orders
- **SUPERVISOR**: All work orders
- **TECHNICIAN**: Only assigned work orders
- **VIEWER**: No (read-only)
- **ACCOUNTANT**: No

## Best Practices

1. **Clear Descriptions** - Provide detailed, specific information
2. **Appropriate Priority** - Set realistic priorities
3. **Multiple Assignments** - Assign multiple users when beneficial
4. **Track Time** - Use time tracking for accurate costs
5. **Update Status** - Keep status current
6. **Document Work** - Add comments and photos
7. **Close Promptly** - Close when work is complete

## Next Steps

- [Work Order Fields](/docs/field-reference/work-orders-fields) - Complete field reference
- [Field Reference Overview](/docs/field-reference) - All resource fields
- [Work Order Workflows](/docs/resources/work-orders/workflows) - Detailed workflows
- [Work Order Examples](/docs/resources/work-orders/examples) - Real-world scenarios
- [Work Order Best Practices](/docs/resources/work-orders/best-practices) - Tips and recommendations

