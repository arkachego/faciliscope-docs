# Basic Concepts

Understanding these core concepts will help you effectively use FaciliScope and manage your facilities.

## Facility Management Overview

Facility Management (FM) is the practice of coordinating the physical workplace with the people and work of an organization. It integrates principles of business administration, architecture, behavioral and engineering sciences.

### Key Principles

1. **Lifecycle Management** - Managing assets from acquisition to disposal
2. **Preventive Maintenance** - Regular maintenance to prevent failures
3. **Corrective Maintenance** - Repairs after failures occur
4. **Cost Optimization** - Balancing maintenance costs with asset reliability
5. **Compliance** - Meeting regulatory and safety requirements

## Core Concepts in FaciliScope

### Resources

Resources are the fundamental entities in FaciliScope:

- **Facilities** - Buildings, properties, or locations you manage
- **Assets** - Equipment, machinery, and infrastructure within facilities
- **Work Orders** - Tasks, maintenance requests, or repair jobs
- **Maintenance Schedules** - Planned, recurring maintenance activities
- **Users** - People who use the system with different roles and permissions

### Work Orders

Work orders are the central mechanism for managing maintenance tasks:

- **Types**: Corrective (repairs), Preventive (scheduled), Inspection, Project
- **Status**: Open → Assigned → In Progress → Completed → Closed
- **Priority**: Critical, High, Medium, Low
- **Assignments**: Can be assigned to multiple users simultaneously

### Assets

Assets represent physical items that need maintenance:

- **Categories**: Organize assets by type (HVAC, Electrical, Plumbing, etc.)
- **Location**: Track which facility and space an asset is in
- **Status**: Active, Inactive, Maintenance, Retired
- **Maintenance History**: Track all work performed on an asset

### Maintenance Types

#### Preventive Maintenance
Scheduled maintenance performed to prevent failures:
- Regular inspections
- Scheduled replacements
- Routine servicing
- Proactive repairs

#### Corrective Maintenance
Repairs performed after a failure occurs:
- Emergency repairs
- Breakdown maintenance
- Reactive fixes

#### Predictive Maintenance
Using data and analytics to predict when maintenance is needed:
- Condition monitoring
- Trend analysis
- Performance metrics

### Assignments

FaciliScope supports multiple user assignments:

- **Work Orders** - Can assign MANAGER, SUPERVISOR, and TECHNICIAN simultaneously
- **Assets** - Can assign multiple users (e.g., MANAGER + VIEWER)
- **Facilities** - Can assign multiple users for different purposes
- **Assignment-Level Access** - Users see only resources assigned to them (unless ADMIN/ROOT)

### Roles and Permissions

FaciliScope uses Role-Based Access Control (RBAC):

- **7 Roles**: ROOT, ADMIN, MANAGER, SUPERVISOR, TECHNICIAN, ACCOUNTANT, VIEWER
- **Permission-Based**: Each role has specific permissions
- **Assignment Filtering**: Lower roles only see assigned resources
- **Hierarchical**: Higher roles inherit capabilities of lower roles

### Status and Lifecycle

Most resources have status fields that track their state:

- **Work Orders**: Open, Assigned, In Progress, On Hold, Completed, Closed
- **Assets**: Active, Inactive, Maintenance, Retired
- **Facilities**: Active, Inactive, Under Maintenance

### Relationships

Resources are interconnected:

- **Facilities contain Assets** - Assets are located in facilities
- **Assets generate Work Orders** - Maintenance needs create work orders
- **Work Orders track Time** - Time entries record labor costs
- **Work Orders consume Inventory** - Parts and materials are tracked
- **Budgets track Costs** - All expenses are recorded in budgets

## Common Workflows

### Creating a Work Order
1. Identify the need (asset failure, scheduled maintenance, inspection)
2. Create work order with details
3. Assign to appropriate users
4. Track progress and time
5. Complete and close

### Managing an Asset
1. Create asset record with specifications
2. Assign to facility and location
3. Schedule preventive maintenance
4. Track work history
5. Update status as needed

### Budget Management
1. Create budget for period/facility/project
2. Allocate amounts to categories
3. Record transactions (work orders, purchases)
4. Monitor spending vs. budget
5. Analyze and adjust

## Best Practices

1. **Complete Information** - Always fill in required fields and provide detailed descriptions
2. **Regular Updates** - Keep work order status current
3. **Document Everything** - Attach photos, documents, and notes
4. **Track Time Accurately** - Use time tracking for accurate cost calculation
5. **Schedule Preventive Maintenance** - Prevent failures before they occur
6. **Monitor Budgets** - Track spending and stay within budget
7. **Assign Appropriately** - Use multiple assignments when needed
8. **Follow Workflows** - Use established processes for consistency

## Next Steps

- [Quick Start Guide](/docs/getting-started/quick-start) - Hands-on tutorial
- [What is Facility Management?](/docs/facility-management-basics/what-is-facility-management) - Deep dive into FM
- [Work Orders Documentation](/docs/resources/work-orders) - Detailed work order guide

