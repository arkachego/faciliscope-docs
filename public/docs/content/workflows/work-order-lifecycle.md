# Work Order Lifecycle

Complete workflow for managing work orders from creation to closure.

## Lifecycle Stages

### 1. Creation
- Work order is created
- Status: OPEN
- Assigned work order number
- Ready for assignment

### 2. Assignment
- Users assigned to work order
- Status: ASSIGNED
- Users notified
- Ready to begin work

### 3. Execution
- Work begins
- Status: IN_PROGRESS
- Time tracking active
- Work being performed

### 4. Completion
- Work finished
- Status: COMPLETED
- Time tracking stopped
- Awaiting review

### 5. Closure
- Final review complete
- Status: CLOSED
- Asset history updated
- Archived

## Detailed Workflow

### Stage 1: Creation

**Who**: MANAGER, SUPERVISOR, ADMIN, ROOT

**Steps**:
1. Navigate to Work Orders
2. Click "Create Work Order"
3. Fill in:
   - Title
   - Description
   - Type
   - Priority
   - Facility
   - Asset (if applicable)
   - Due date
4. Optionally assign users
5. Save

**Result**: Work order created with status OPEN

### Stage 2: Assignment

**Who**: MANAGER, SUPERVISOR, ADMIN, ROOT

**Steps**:
1. Open work order
2. Go to "Assignments" section
3. Select user(s) to assign
4. Save assignments

**Result**: 
- Status changes to ASSIGNED
- Users receive notifications
- Work order appears in assigned users' lists

### Stage 3: Execution

**Who**: Assigned TECHNICIAN, SUPERVISOR, MANAGER

**Steps**:
1. Assigned user opens work order
2. Updates status to IN_PROGRESS
3. Starts time tracking
4. Performs work
5. Adds comments as needed
6. Attaches photos if applicable

**Result**: Work is actively being performed

### Stage 4: Completion

**Who**: Assigned TECHNICIAN, SUPERVISOR, MANAGER

**Steps**:
1. Finish all work tasks
2. Stop time tracking
3. Add completion notes
4. Attach completion photos
5. Update status to COMPLETED

**Result**: 
- Work is finished
- Awaiting final review
- Time and costs calculated

### Stage 5: Closure

**Who**: MANAGER, ADMIN, ROOT

**Steps**:
1. Review completed work
2. Verify all information
3. Check costs
4. Update status to CLOSED

**Result**:
- Work order finalized
- Asset maintenance history updated
- Work order archived

## Status Transitions

```
OPEN → ASSIGNED → IN_PROGRESS → COMPLETED → CLOSED
         ↓
      ON_HOLD (can resume to IN_PROGRESS)
```

**ON_HOLD**: Can be set from any status when work is paused. Can resume to previous status or IN_PROGRESS.

## Best Practices

1. **Create with Details**: Provide complete information when creating
2. **Assign Promptly**: Assign users as soon as possible
3. **Update Status**: Keep status current as work progresses
4. **Track Time**: Use time tracking for accurate costs
5. **Document Work**: Add comments and photos
6. **Close Promptly**: Don't leave work orders in COMPLETED status

## Next Steps

- [Work Order Workflows](/docs/resources/work-orders/workflows) - Detailed work order operations
- [Work Order Examples](/docs/resources/work-orders/examples) - Real-world scenarios
- [Work Order Best Practices](/docs/resources/work-orders/best-practices) - Tips and recommendations

