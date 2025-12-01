# Examples

Real-world examples of work orders in different scenarios.

## Example 1: Corrective Maintenance - HVAC Repair

### Scenario
The HVAC unit in Conference Room A is not cooling. The room temperature is 78°F when it should be 72°F.

### Work Order Details

**Title**: "Repair HVAC Unit - Conference Room A"

**Description**: 
"The HVAC unit serving Conference Room A is not cooling properly. Room temperature is 78°F, setpoint is 72°F. Unit is a Carrier 48HJ-024, installed in 2018. Last maintenance was 6 months ago. Please check refrigerant levels, air filter, and compressor operation."

**Type**: CORRECTIVE

**Priority**: HIGH (affects meeting room usability)

**Status**: OPEN → ASSIGNED → IN_PROGRESS → COMPLETED → CLOSED

**Facility**: Main Office Building

**Asset**: HVAC Unit CR-A-001

**Due Date**: Today + 2 days

**Assigned Users**:
- MANAGER: John Smith (oversight)
- SUPERVISOR: Mike Johnson (coordination)
- TECHNICIAN: Sarah Williams (execution)

### Workflow

1. **Creation** (Day 1, 9:00 AM)
   - Work order created by facility manager
   - Assigned to HVAC team
   - Priority set to HIGH

2. **Assignment** (Day 1, 9:15 AM)
   - SUPERVISOR reviews and assigns TECHNICIAN
   - Status changes to ASSIGNED

3. **Work Begins** (Day 1, 10:00 AM)
   - TECHNICIAN arrives on site
   - Status changes to IN_PROGRESS
   - Timer started

4. **Diagnosis** (Day 1, 10:30 AM)
   - Comment added: "Found dirty air filter and low refrigerant. Filter replaced, refrigerant topped off."
   - Photo attached: Before/after filter comparison

5. **Completion** (Day 1, 11:00 AM)
   - Timer stopped (1 hour)
   - Status changes to COMPLETED
   - Comment: "HVAC unit now cooling properly. Temperature dropped to 72°F. System operating normally."

6. **Closure** (Day 1, 2:00 PM)
   - MANAGER reviews and approves
   - Status changes to CLOSED
   - Asset maintenance history updated

### Results
- **Time Spent**: 1 hour
- **Labor Cost**: $50 (1 hour × $50/hour)
- **Parts Cost**: $25 (air filter)
- **Total Cost**: $75
- **Resolution Time**: 2 hours from creation to completion

## Example 2: Preventive Maintenance - Monthly HVAC Check

### Scenario
Monthly preventive maintenance for all HVAC units in the building.

### Work Order Details

**Title**: "Monthly HVAC Preventive Maintenance - Building A"

**Description**: 
"Monthly preventive maintenance check for all HVAC units in Building A. Tasks: Check filters, inspect coils, test operation, verify temperature settings, check for leaks, lubricate moving parts."

**Type**: PREVENTIVE

**Priority**: MEDIUM

**Status**: OPEN → ASSIGNED → IN_PROGRESS → COMPLETED → CLOSED

**Facility**: Building A

**Asset**: Multiple HVAC units

**Due Date**: First Monday of month

**Assigned Users**:
- SUPERVISOR: Mike Johnson
- TECHNICIAN: Sarah Williams
- TECHNICIAN: Tom Brown

**Created From**: Maintenance Schedule (recurring monthly)

### Workflow

1. **Auto-Generation** (First of month, 8:00 AM)
   - Maintenance schedule generates work order
   - Work order created automatically
   - Assigned to maintenance team

2. **Planning** (First of month, 8:30 AM)
   - SUPERVISOR reviews schedule
   - Assigns TECHNICIANs to specific units
   - Status: ASSIGNED

3. **Execution** (First of month, 9:00 AM - 3:00 PM)
   - TECHNICIANs perform maintenance
   - Status: IN_PROGRESS
   - Checklists completed for each unit
   - Photos taken of filters, coils

4. **Completion** (First of month, 3:30 PM)
   - All units serviced
   - Status: COMPLETED
   - Summary comment: "All 12 HVAC units serviced. 3 filters replaced, 2 units needed minor adjustments. All units operating normally."

5. **Closure** (First of month, 4:00 PM)
   - SUPERVISOR reviews
   - Status: CLOSED
   - Next month's work order scheduled

### Results
- **Time Spent**: 6 hours (2 technicians × 3 hours)
- **Labor Cost**: $300
- **Parts Cost**: $45 (3 filters)
- **Total Cost**: $345
- **Units Serviced**: 12
- **Issues Found**: 2 minor issues (resolved)

## Example 3: Inspection - Fire Safety Inspection

### Scenario
Annual fire safety inspection required by local fire department.

### Work Order Details

**Title**: "Annual Fire Safety Inspection - Main Building"

**Description**: 
"Annual fire safety inspection as required by Fire Department. Inspect: Fire extinguishers (expiration dates, pressure), fire alarms (test all zones), emergency exits (clear, functional), sprinkler systems (visual inspection), fire doors (operation). Document all findings."

**Type**: INSPECTION

**Priority**: HIGH (compliance requirement)

**Status**: OPEN → ASSIGNED → IN_PROGRESS → COMPLETED → CLOSED

**Facility**: Main Building

**Due Date**: Before compliance deadline (2 weeks)

**Assigned Users**:
- MANAGER: John Smith (oversight)
- SUPERVISOR: Mike Johnson (coordination)
- TECHNICIAN: Sarah Williams (inspection)

### Workflow

1. **Creation** (2 weeks before deadline)
   - Work order created from compliance record
   - Assigned to safety team
   - Priority: HIGH

2. **Preparation** (1 week before deadline)
   - Status: ASSIGNED
   - Inspection checklist prepared
   - Schedule coordinated

3. **Inspection** (Deadline - 3 days)
   - Status: IN_PROGRESS
   - All areas inspected
   - Findings documented
   - Photos taken

4. **Reporting** (Deadline - 2 days)
   - Inspection report created
   - Status: COMPLETED
   - Comment: "Inspection complete. 2 fire extinguishers need replacement (expiring next month). All other systems in compliance. Report submitted to Fire Department."

5. **Follow-up** (Deadline - 1 day)
   - Compliance record updated
   - Status: CLOSED
   - Next inspection scheduled

### Results
- **Time Spent**: 4 hours
- **Labor Cost**: $200
- **Parts Cost**: $0 (inspection only)
- **Total Cost**: $200
- **Compliance**: Met deadline
- **Issues Found**: 2 fire extinguishers need replacement

## Example 4: Project - Building Renovation

### Scenario
Renovation of the third floor to create new office spaces.

### Work Order Details

**Title**: "Third Floor Renovation Project - Office Space Creation"

**Description**: 
"Renovation project to convert third floor storage area into 4 new office spaces. Work includes: Demolition, electrical work, HVAC modifications, drywall, flooring, painting, lighting installation. Estimated duration: 3 weeks."

**Type**: PROJECT

**Priority**: MEDIUM (planned project)

**Status**: OPEN → ASSIGNED → IN_PROGRESS → ON_HOLD → IN_PROGRESS → COMPLETED → CLOSED

**Facility**: Main Building, 3rd Floor

**Due Date**: 3 weeks from start

**Assigned Users**:
- MANAGER: John Smith (project oversight)
- SUPERVISOR: Mike Johnson (daily coordination)
- TECHNICIAN: Multiple (different trades)

### Workflow

1. **Project Initiation** (Week 1, Day 1)
   - Work order created
   - Budget allocated
   - Team assigned
   - Status: ASSIGNED

2. **Work Begins** (Week 1, Day 2)
   - Demolition starts
   - Status: IN_PROGRESS
   - Daily progress updates

3. **On Hold** (Week 2, Day 3)
   - Waiting for permit approval
   - Status: ON_HOLD
   - Comment: "Electrical permit pending. Expected approval in 2 days."

4. **Resume Work** (Week 2, Day 5)
   - Permit approved
   - Status: IN_PROGRESS
   - Work continues

5. **Completion** (Week 3, Day 5)
   - All work finished
   - Final inspection passed
   - Status: COMPLETED

6. **Closure** (Week 3, Day 7)
   - Final walkthrough
   - Documentation complete
   - Status: CLOSED

### Results
- **Time Spent**: 120 hours (over 3 weeks)
- **Labor Cost**: $6,000
- **Materials Cost**: $15,000
- **Total Cost**: $21,000
- **Duration**: 3 weeks (with 2-day delay)
- **Outcome**: 4 new office spaces created

## Key Takeaways

### From Example 1 (Corrective)
- Quick response to urgent issues
- Multiple assignments for complex work
- Document diagnosis and solution
- Track time and costs

### From Example 2 (Preventive)
- Use maintenance schedules for recurring work
- Assign multiple technicians for efficiency
- Complete checklists thoroughly
- Document findings

### From Example 3 (Inspection)
- Link to compliance requirements
- Document all findings
- Meet deadlines
- Update compliance records

### From Example 4 (Project)
- Use PROJECT type for larger initiatives
- Expect status changes (including ON_HOLD)
- Track progress regularly
- Manage budget carefully

## Next Steps

- [Work Order Best Practices](/docs/resources/work-orders/best-practices) - Learn from these examples
- [Work Order Workflows](/docs/resources/work-orders/workflows) - Detailed workflow guides
- [Work Order Fields](/docs/resources/work-orders/fields) - Understand all fields used

