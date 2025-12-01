# Best Practices

Tips and recommendations for effectively managing work orders in FaciliScope.

## Creating Work Orders

### 1. Write Clear, Descriptive Titles

**Good Examples**:
- "Replace HVAC filter in Conference Room A"
- "Repair leaking pipe in 3rd floor restroom"
- "Monthly preventive maintenance - Building A HVAC units"

**Bad Examples**:
- "Fix it"
- "Maintenance"
- "Problem"

**Why**: Clear titles help users quickly identify work orders and understand what needs to be done.

### 2. Provide Detailed Descriptions

**Include**:
- What the problem is
- Where it's located
- When it was noticed
- Any relevant details (model numbers, symptoms, etc.)
- Special instructions or requirements

**Example**:
"The HVAC unit in Conference Room A is not cooling. Room temperature is 78°F when setpoint is 72°F. Unit is Carrier 48HJ-024, installed 2018. Last maintenance 6 months ago. Please check refrigerant, filter, and compressor. Customer requested work be done after hours if possible."

### 3. Set Appropriate Priorities

**Guidelines**:
- **CRITICAL**: Safety risks, major system failures, security issues
- **HIGH**: Affects operations, multiple users impacted
- **MEDIUM**: Normal maintenance, minor issues
- **LOW**: Improvements, non-urgent requests

**Avoid**: Overusing CRITICAL priority - reserve for truly urgent situations.

### 4. Use Correct Work Order Types

- **CORRECTIVE**: Something is broken and needs repair
- **PREVENTIVE**: Scheduled maintenance to prevent failures
- **INSPECTION**: Safety, compliance, or quality checks
- **PROJECT**: Larger initiatives or improvements

**Why**: Correct types enable accurate reporting and workflow automation.

### 5. Link to Assets and Facilities

**Always specify**:
- **Facility**: Which building/location
- **Asset**: Which piece of equipment (when applicable)

**Benefits**:
- Better organization
- Maintenance history tracking
- Location-based reporting
- Asset lifecycle management

## Assigning Users

### 1. Use Multiple Assignments Appropriately

**When to assign multiple users**:
- Complex work requiring coordination
- Different roles needed (MANAGER + SUPERVISOR + TECHNICIAN)
- Team-based work
- Knowledge transfer situations

**Example**: HVAC repair might have:
- MANAGER for oversight
- SUPERVISOR for coordination
- TECHNICIAN for execution

### 2. Assign Based on Skills and Availability

- Match technician skills to work requirements
- Consider current workload
- Ensure adequate resources
- Balance assignments across team

### 3. Update Assignments as Needed

- Add users if more help is needed
- Remove users if assignment changes
- Notify affected users of changes

## Managing Status

### 1. Keep Status Current

**Update status**:
- When work begins → IN_PROGRESS
- When paused → ON_HOLD (with reason)
- When finished → COMPLETED
- When finalized → CLOSED

**Why**: Accurate status enables:
- Real-time visibility
- Proper reporting
- SLA monitoring
- Resource planning

### 2. Use ON_HOLD Appropriately

**When to use ON_HOLD**:
- Waiting for parts
- Waiting for approval
- Waiting for conditions (weather, access)
- Waiting for other work to complete

**Always add comment** explaining why work is on hold and when it can resume.

### 3. Don't Skip Statuses

**Follow the lifecycle**:
- OPEN → ASSIGNED → IN_PROGRESS → COMPLETED → CLOSED

**Avoid**: Jumping from OPEN directly to COMPLETED without intermediate statuses.

## Time Tracking

### 1. Track Time Accurately

**Use timer**:
- Start when work begins
- Stop when work ends
- Don't forget to stop timer

**Benefits**:
- Accurate labor cost calculation
- Productivity analysis
- Better estimates for future work
- Budget tracking

### 2. Add Time Entry Descriptions

**Include**:
- What work was performed
- Any issues encountered
- Parts or materials used

**Example**: "Replaced air filter, checked refrigerant levels, tested operation. Found minor leak in connection, tightened and tested."

### 3. Review Time Entries

- Compare actual vs. estimated hours
- Identify trends
- Improve future estimates
- Optimize processes

## Documentation

### 1. Add Comments Regularly

**When to comment**:
- Status changes
- Issues encountered
- Progress updates
- Completion notes

**Best Practice**: Add at least one comment per status change.

### 2. Attach Photos

**Include**:
- Before photos (showing problem)
- During photos (work in progress)
- After photos (completed work)
- Parts or materials used

**Why**: Photos provide visual documentation and help with future similar work.

### 3. Attach Relevant Documents

**Types of documents**:
- Equipment manuals
- Inspection reports
- Test results
- Vendor invoices
- Compliance certificates

## Completion and Closure

### 1. Verify Completion

**Before marking COMPLETED**:
- All work is finished
- Quality is verified
- Testing is complete
- Customer/requester is satisfied

### 2. Document Completion

**Include**:
- What was done
- Parts/materials used
- Test results
- Any recommendations
- Completion photos

### 3. Close Promptly

**After completion**:
- Review all information
- Verify costs are accurate
- Update asset maintenance history
- Close work order

**Don't leave work orders in COMPLETED status indefinitely.**

## Using Templates

### 1. Create Templates for Common Work

**Good candidates for templates**:
- Monthly preventive maintenance
- Common repairs
- Standard inspections
- Routine servicing

**Benefits**:
- Consistency
- Faster creation
- Reduced errors
- Standardization

### 2. Keep Templates Updated

- Review templates regularly
- Update based on experience
- Remove obsolete templates
- Add new common tasks

## Budget Management

### 1. Link Work Orders to Budgets

- Select appropriate budget when creating
- Track spending against budget
- Monitor budget alerts
- Adjust as needed

### 2. Track All Costs

- Labor costs (from time tracking)
- Parts costs (from inventory)
- Vendor costs (from purchase orders)
- Total cost accuracy

## SLA Compliance

### 1. Monitor SLA Status

- Check SLA status regularly
- Respond before response deadline
- Resolve before resolution deadline
- Address AT_RISK status promptly

### 2. Understand SLA Rules

- Know SLA definitions for your work order types
- Understand priority impact on deadlines
- Plan work to meet SLA requirements

## Common Mistakes to Avoid

### 1. Vague Descriptions

**Don't**: "Fix the thing"
**Do**: "Repair leaking pipe in 3rd floor men's restroom. Pipe is 1/2 inch copper, located behind sink. Leak is at joint connection."

### 2. Incorrect Priorities

**Don't**: Mark everything as CRITICAL
**Do**: Use appropriate priority based on actual impact

### 3. Missing Assignments

**Don't**: Create work orders without assigning
**Do**: Assign appropriate users promptly

### 4. Not Updating Status

**Don't**: Leave status unchanged
**Do**: Update status as work progresses

### 5. Skipping Documentation

**Don't**: Complete work without documenting
**Do**: Add comments, photos, and notes

### 6. Not Tracking Time

**Don't**: Forget to track time
**Do**: Use timer or manual time entry

### 7. Leaving Work Orders Open

**Don't**: Leave completed work orders open
**Do**: Close work orders promptly after completion

## Optimization Tips

### 1. Batch Similar Work

- Group similar tasks
- Schedule together
- Improve efficiency
- Reduce travel time

### 2. Use Maintenance Schedules

- Automate recurring work
- Ensure nothing is missed
- Standardize procedures
- Track compliance

### 3. Analyze Patterns

- Review common issues
- Identify root causes
- Improve preventive maintenance
- Reduce corrective work

### 4. Standardize Processes

- Use templates
- Follow workflows
- Document procedures
- Train team members

## Next Steps

- [Work Order Examples](/docs/resources/work-orders/examples) - See these practices in action
- [Work Order Workflows](/docs/resources/work-orders/workflows) - Detailed process guides
- [Work Order Fields](/docs/resources/work-orders/fields) - Complete field reference

