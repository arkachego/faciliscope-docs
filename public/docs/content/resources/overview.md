# Resources Overview

FaciliScope manages various types of resources that work together to support facility management operations.

## What are Resources?

Resources are the fundamental entities in FaciliScope that represent different aspects of facility management. Each resource type has specific fields, relationships, and workflows.

## Resource Categories

### Core Operational Resources

**Work Orders**
- Tasks, maintenance requests, and repair jobs
- Central mechanism for managing maintenance work
- Supports multiple user assignments
- Tracks time and costs

**Assets**
- Equipment, machinery, and infrastructure
- Tracked throughout their lifecycle
- Linked to facilities and work orders
- Support preventive maintenance

**Facilities**
- Buildings, properties, and locations
- Contain assets and spaces
- Organize work by location
- Track facility-specific budgets

### Maintenance Resources

**Maintenance Schedules**
- Recurring maintenance plans
- Automatically generate work orders
- Support checklists and procedures
- Track maintenance history

**Work Order Templates**
- Reusable work order definitions
- Standardize common tasks
- Reduce data entry
- Ensure consistency

### Financial Resources

**Budgets**
- Financial plans and allocations
- Track spending vs. budget
- Support multiple budget types
- Enable cost analysis

**Purchase Orders**
- Procurement documents
- Track vendor orders
- Manage approvals
- Link to budgets

**Vendors**
- Suppliers and contractors
- Manage vendor relationships
- Track vendor performance
- Organize procurement

### Supporting Resources

**Inventory**
- Parts, materials, and supplies
- Track stock levels
- Manage locations
- Support work orders

**Compliance Records**
- Certifications and inspections
- Track expiration dates
- Ensure regulatory compliance
- Link to assets and facilities

**Documents**
- Files and attachments
- Organize by category
- Link to resources
- Version control

**Time Entries**
- Labor time tracking
- Calculate labor costs
- Link to work orders
- Support productivity analysis

**Notifications**
- System alerts and messages
- Work order assignments
- Compliance reminders
- Status updates

### Configuration Resources

**Users & Organizations**
- User accounts and roles
- Organization settings
- Access control
- User management

**SLA Definitions**
- Service level agreements
- Response and resolution times
- Priority-based rules
- Compliance monitoring

**Energy Meters**
- Energy consumption tracking
- Multiple energy types
- Consumption analysis
- Cost tracking

**Spaces**
- Rooms and areas within facilities
- Space utilization tracking
- Asset location
- Space assignments

## Resource Relationships

Resources are interconnected:

```
Organization
  ├── Facilities
  │   ├── Assets
  │   │   ├── Work Orders
  │   │   │   ├── Time Entries
  │   │   │   ├── Documents
  │   │   │   └── Inventory (Parts)
  │   │   └── Maintenance Schedules
  │   │       └── Work Orders (generated)
  │   └── Spaces
  │       └── Assets
  ├── Budgets
  │   ├── Work Orders (costs)
  │   └── Purchase Orders (costs)
  ├── Purchase Orders
  │   ├── Vendors
  │   └── Inventory Items
  └── Users
      ├── Work Order Assignments
      ├── Asset Assignments
      └── Facility Assignments
```

## Resource Access

Access to resources is controlled by:

1. **Role-Based Permissions** - What your role allows
2. **Assignment-Level Filtering** - What you're assigned to
3. **Organization Scope** - Resources in your organization

### Viewing Resources

- **ROOT/ADMIN**: See all resources in organization
- **MANAGER**: See all resources in organization
- **SUPERVISOR**: See all resources, focus on team assignments
- **TECHNICIAN/VIEWER**: See only assigned resources

### Creating Resources

- **Work Orders**: MANAGER, SUPERVISOR (and ADMIN/ROOT)
- **Assets**: MANAGER (and ADMIN/ROOT)
- **Facilities**: ADMIN (and ROOT)
- **Budgets**: ADMIN, ACCOUNTANT (and ROOT)

## Resource Documentation

Each resource has comprehensive documentation:

1. **Overview** - What it is, when to use it
2. **Fields** - Complete field reference
3. **Workflows** - Common operations
4. **Examples** - Real-world scenarios
5. **Best Practices** - Tips and recommendations

## Getting Started with Resources

1. **Start with Facilities** - Create your facilities first
2. **Add Assets** - Register equipment and infrastructure
3. **Create Work Orders** - Begin managing maintenance
4. **Schedule Maintenance** - Set up preventive maintenance
5. **Track Budgets** - Monitor spending

## Next Steps

Explore detailed documentation for each resource:

- [Work Orders](/docs/resources/work-orders) - Most important resource
- [Assets](/docs/resources/assets) - Equipment management
- [Facilities](/docs/resources/facilities) - Location management
- [Maintenance Schedules](/docs/resources/maintenance-schedules) - Preventive maintenance
- [Budgets](/docs/resources/budgets) - Financial management

