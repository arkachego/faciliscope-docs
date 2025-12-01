# Quick Start Guide

This guide will walk you through creating your first resources in FaciliScope. Follow these steps to get up and running quickly.

## Prerequisites

- You have a FaciliScope account
- You have appropriate permissions (ADMIN or MANAGER role recommended)
- You're logged into the application

## Step 1: Create Your First Facility

A facility is a building, property, or location you manage. All other resources are typically associated with facilities.

### Steps:

1. Navigate to **Inventory → Facilities** (or click "Facilities" in the navigation menu)
2. Click the **"Create Facility"** or **"New"** button
3. Fill in the required information:
   - **Facility Name**: e.g., "Main Office Building"
   - **Address**: Street address
   - **City**: City name
   - **State**: State or province
   - **ZIP Code**: Postal code
   - **Country**: Defaults to USA
4. Optionally assign users to the facility (you can assign multiple users)
5. Click **"Create Facility"**

**Congratulations!** You've created your first facility.

## Step 2: Create Your First Asset

Assets are equipment, machinery, or infrastructure that need maintenance.

### Steps:

1. Navigate to **Assets → All Items**
2. Click **"Create Asset"** or **"New"**
3. Fill in the required information:
   - **Asset Name**: e.g., "HVAC Unit - Floor 3"
   - **Asset Tag**: Optional unique identifier (e.g., "HVAC-003")
   - **Serial Number**: If available
   - **Manufacturer**: Equipment manufacturer
   - **Model**: Model number
   - **Facility**: Select the facility you created
   - **Category**: Choose or create an asset category
   - **Status**: Usually starts as "Active"
4. Optionally assign users to the asset
5. Click **"Create Asset"**

**Great!** You now have an asset that can be maintained.

## Step 3: Create Your First Work Order

Work orders are tasks that need to be completed, such as maintenance or repairs.

### Steps:

1. Navigate to **Work Orders**
2. Click **"Create Work Order"** or **"New"**
3. Fill in the required information:
   - **Title**: Brief description (e.g., "Replace air filter in HVAC Unit")
   - **Description**: Detailed information about the work needed
   - **Type**: Choose from:
     - **Corrective**: Repair something that's broken
     - **Preventive**: Scheduled maintenance
     - **Inspection**: Inspection or audit
     - **Project**: Larger project work
   - **Priority**: 
     - **Critical**: Urgent, needs immediate attention
     - **High**: Important, should be done soon
     - **Medium**: Normal priority
     - **Low**: Can wait
   - **Status**: Usually starts as "Open"
   - **Facility**: Select your facility
   - **Asset**: Select the asset (optional but recommended)
   - **Due Date**: When the work should be completed
4. **Assign Users**: You can assign multiple users:
   - **MANAGER**: For oversight
   - **SUPERVISOR**: For coordination
   - **TECHNICIAN**: For execution
5. Click **"Create Work Order"**

**Excellent!** You've created your first work order.

## Step 4: Update Work Order Status

As work progresses, update the status:

1. Open the work order you created
2. In the **Status** field, change it to:
   - **Assigned**: When you've assigned it to someone
   - **In Progress**: When work has started
   - **On Hold**: If work is paused
   - **Completed**: When work is finished
   - **Closed**: When everything is finalized

## Step 5: Track Time (Optional)

If you're a TECHNICIAN or have permission to track time:

1. Open the work order
2. Go to the **Time Tracking** tab
3. Click **"Start Timer"** when you begin work
4. Click **"Stop Timer"** when you finish
5. The system automatically calculates labor costs

## Step 6: Create a Maintenance Schedule (Optional)

For recurring maintenance:

1. Navigate to **Maintenance → Schedules**
2. Click **"Create Schedule"**
3. Fill in:
   - **Schedule Name**: e.g., "Monthly HVAC Filter Replacement"
   - **Asset**: Select the asset
   - **Frequency**: How often (Daily, Weekly, Monthly, etc.)
   - **Priority**: Usually "Medium" for preventive maintenance
4. Assign users who will perform the maintenance
5. Click **"Create Schedule"**

The system will automatically generate work orders based on the schedule.

## What You've Learned

By completing this quick start, you've learned:

- ✅ How to create facilities
- ✅ How to create assets
- ✅ How to create work orders
- ✅ How to assign multiple users
- ✅ How to update work order status
- ✅ How to track time
- ✅ How to create maintenance schedules

## Next Steps

Now that you've completed the basics:

1. **Explore Resource Documentation** - Learn about each resource in detail
   - [Work Orders](/docs/resources/work-orders)
   - [Assets](/docs/resources/assets)
   - [Facilities](/docs/resources/facilities)

2. **Learn About RBAC** - Understand roles and permissions
   - [RBAC Overview](/docs/rbac/overview)
   - [Your Role](/docs/rbac/roles) - Find your role

3. **Read Facility Management Basics** - Deepen your understanding
   - [What is Facility Management?](/docs/facility-management-basics/what-is-facility-management)
   - [Key Concepts](/docs/facility-management-basics/key-concepts)

4. **Explore Workflows** - Learn common processes
   - [Common Workflows](/docs/workflows/common-workflows)
   - [Work Order Lifecycle](/docs/workflows/work-order-lifecycle)

## Tips for Success

- **Start Small** - Begin with a few facilities and assets, then expand
- **Use Templates** - Create work order templates for common tasks
- **Track Everything** - Document all work with descriptions and photos
- **Schedule Preventive Maintenance** - Prevent problems before they occur
- **Monitor Budgets** - Keep track of spending from the start
- **Assign Appropriately** - Use multiple assignments when it makes sense

## Getting Help

- Use the **Search** function (top right) to find specific topics
- Browse the **Documentation** menu for organized information
- Check the **Field Reference** for detailed field explanations
- Review **Examples** in resource documentation for real-world scenarios

Happy managing! 🎉

