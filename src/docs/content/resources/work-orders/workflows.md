# Workflows

Step-by-step guides for common work order operations in FaciliScope.

## Creating a Work Order

### Basic Work Order Creation

1. **Navigate to Work Orders**
   - Click "Work Orders" in the navigation menu
   - Or go to `/work-orders`

2. **Click "Create Work Order"**
   - Button is typically in the top right
   - Or use the "New" button

3. **Fill Required Fields**
   - **Title**: Enter a clear, descriptive title
   - **Type**: Select Corrective, Preventive, Inspection, or Project
   - **Priority**: Choose Critical, High, Medium, or Low
   - **Status**: Usually starts as "Open"

4. **Add Details**
   - **Description**: Provide detailed information
   - **Facility**: Select the facility (if applicable)
   - **Asset**: Select the asset (if applicable)
   - **Due Date**: Set target completion date

5. **Assign Users** (Optional at creation)
   - Use the "Assign To" multi-select field
   - Select one or more users
   - Can assign MANAGER, SUPERVISOR, and/or TECHNICIAN

6. **Save**
   - Click "Create Work Order"
   - Work order is created and assigned a work order number

### Creating from Template

1. Navigate to Work Orders
2. Click "Create from Template"
3. Select a template
4. Pre-filled form appears with template data
5. Modify as needed
6. Save

### Creating from Maintenance Schedule

1. Maintenance schedule automatically generates work orders
2. Work orders appear in the work order list
3. Review and assign as needed

## Assigning Users to Work Orders

### Single Assignment

1. Open the work order
2. Find "Assign To" section
3. Select a user from the dropdown
4. User receives notification
5. Work order appears in their assigned list

### Multiple Assignments

1. Open the work order
2. Find "Assign To" section (multi-select)
3. Select multiple users:
   - **MANAGER**: For oversight
   - **SUPERVISOR**: For coordination
   - **TECHNICIAN**: For execution
4. All selected users receive notifications
5. All can view and work on the order

### Updating Assignments

1. Open the work order
2. Modify the "Assign To" field
3. Add or remove users
4. Changes are saved automatically
5. Affected users are notified

## Updating Work Order Status

### Status Progression

**Typical Flow:**
1. **Open** → Created, not yet assigned
2. **Assigned** → Users assigned, ready to start
3. **In Progress** → Work has begun
4. **On Hold** → Temporarily paused (if needed)
5. **Completed** → Work finished
6. **Closed** → Finalized

### Changing Status

1. Open the work order
2. Find the "Status" field (usually at the top)
3. Select new status from dropdown
4. Status updates immediately
5. Relevant users are notified

### Status-Specific Actions

**When Status = "In Progress":**
- Start time tracking
- Add progress comments
- Update estimated completion

**When Status = "On Hold":**
- Add reason in comments
- Note what's needed to resume
- Set expected resume date

**When Status = "Completed":**
- Verify all work is done
- Add completion notes
- Attach completion photos
- Review time and costs

**When Status = "Closed":**
- Final review
- Archive documentation
- Update asset maintenance history

## Tracking Time on Work Orders

### Starting a Timer

1. Open the work order
2. Go to "Time Tracking" tab
3. Click "Start Timer" button
4. Timer begins counting
5. Work order status may auto-update to "In Progress"

### Stopping a Timer

1. Go to "Time Tracking" tab
2. Click "Stop Timer" button
3. Time entry is created
4. Labor cost is calculated automatically

### Manual Time Entry

1. Go to "Time Tracking" tab
2. Click "Add Time Entry"
3. Enter:
   - Start time
   - End time (or duration)
   - Description
4. Save
5. Cost is calculated from hourly rate

### Viewing Time Entries

1. Go to "Time Tracking" tab
2. View list of all time entries
3. See:
   - User who tracked time
   - Duration
   - Cost
   - Date and time

## Adding Comments

1. Open the work order
2. Scroll to "Comments" section
3. Type your comment
4. Click "Add Comment" or press Enter
5. Comment is saved with timestamp and author

**Best Practices:**
- Add comments for status updates
- Document issues encountered
- Note parts needed
- Record completion details

## Attaching Documents

### Uploading Files

1. Open the work order
2. Go to "Documents" tab or section
3. Click "Upload" or "Attach Document"
4. Select file(s) from your computer
5. Files are uploaded and attached

### Types of Documents

- **Photos**: Before/after photos, damage photos
- **Manuals**: Equipment manuals, procedures
- **Reports**: Inspection reports, test results
- **Invoices**: Vendor invoices, receipts

## Adding Parts/Materials

1. Open the work order
2. Go to "Parts" tab
3. Click "Add Part"
4. Select inventory item
5. Enter quantity used
6. Cost is calculated automatically
7. Inventory is updated

## Completing a Work Order

### Completion Steps

1. **Finish All Work**
   - Complete all tasks
   - Verify quality
   - Test functionality

2. **Update Status**
   - Change status to "Completed"
   - Add completion notes
   - Attach completion photos

3. **Finalize Details**
   - Verify time entries are complete
   - Confirm all parts are recorded
   - Review total costs

4. **Close Work Order**
   - Change status to "Closed"
   - Work order is archived
   - Asset maintenance history is updated

## Work Order Search and Filtering

### Searching

1. Use search bar at top of work order list
2. Search by:
   - Work order number
   - Title
   - Description
3. Results update as you type

### Filtering

1. Use filter options:
   - **Status**: Open, Assigned, In Progress, etc.
   - **Priority**: Critical, High, Medium, Low
   - **Type**: Corrective, Preventive, Inspection, Project
   - **Facility**: Filter by facility
   - **Asset**: Filter by asset
   - **Assigned User**: Filter by assignee
   - **Date Range**: Filter by creation or due date

2. Apply multiple filters
3. Clear filters to reset

### Sorting

1. Click column headers to sort
2. Sort by:
   - Work order number
   - Title
   - Status
   - Priority
   - Due date
   - Created date

## Bulk Operations

### Bulk Status Update

1. Select multiple work orders (checkboxes)
2. Click "Bulk Actions"
3. Select "Update Status"
4. Choose new status
5. All selected work orders update

### Bulk Assignment

1. Select multiple work orders
2. Click "Bulk Actions"
3. Select "Assign Users"
4. Select users
5. All selected work orders are assigned

## Next Steps

- [Work Order Examples](/docs/resources/work-orders/examples) - Real-world scenarios
- [Work Order Best Practices](/docs/resources/work-orders/best-practices) - Tips and recommendations
- [Work Order Fields](/docs/resources/work-orders/fields) - Field reference

