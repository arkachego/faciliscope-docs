# Budget Workflow

Complete workflow for creating and managing budgets in FaciliScope.

## Overview

Budgets help track and control facility spending by allocating funds and monitoring actual costs.

## Workflow Steps

### 1. Create Budget

**Who**: ADMIN, ACCOUNTANT, ROOT

**Steps**:
1. Navigate to Budgets
2. Click "Create Budget"
3. Fill in:
   - Budget name
   - Period (start and end dates)
   - Facility (if facility-specific)
   - Total budget amount
   - Category allocations
4. Save

**Result**: Budget created and ready for tracking

### 2. Allocate Funds

**Who**: ADMIN, ACCOUNTANT, ROOT

**Steps**:
1. Open budget
2. Go to "Allocations" section
3. Allocate amounts to categories:
   - Labor
   - Materials
   - Contractors
   - Equipment
   - Other
4. Save allocations

**Result**: Budget allocated to categories

### 3. Track Spending

**System Action**:
- Work orders record costs automatically
- Purchase orders record costs automatically
- Time entries calculate labor costs
- Parts usage calculates material costs

**Result**: Actual spending tracked vs. budget

### 4. Monitor Budget

**Who**: ADMIN, ACCOUNTANT, MANAGER, ROOT

**Steps**:
1. Open budget
2. Review budget vs. actual
3. Check category spending
4. Identify variances
5. Set alerts if needed

**Result**: Budget performance visible

### 5. Adjust Budget

**Who**: ADMIN, ACCOUNTANT, ROOT

**Steps**:
1. Review budget performance
2. Identify need for adjustment
3. Update budget amounts
4. Reallocate if needed
5. Document changes

**Result**: Budget updated

## Budget Types

### Facility Budget
- For a specific facility
- Tracks all facility costs
- Facility-specific spending

### Department Budget
- For a department or division
- Tracks department costs
- Department-specific spending

### Project Budget
- For a specific project
- Tracks project costs
- Project-specific spending

### Global Budget
- Organization-wide
- Tracks all costs
- Overall spending control

## Cost Tracking

### Automatic Cost Tracking
- **Work Orders**: Labor and parts costs
- **Purchase Orders**: Material and service costs
- **Time Entries**: Labor costs calculated
- **Parts Usage**: Material costs from inventory

### Manual Cost Entry
- Direct expenses
- Overhead allocation
- Other costs

## Budget Alerts

Set alerts for:
- Budget threshold reached (e.g., 80%)
- Budget exceeded
- Category overrun
- Period ending soon

## Best Practices

1. **Plan Realistically**: Base budgets on historical data
2. **Allocate Appropriately**: Distribute funds to categories
3. **Monitor Regularly**: Check budget vs. actual frequently
4. **Set Alerts**: Get notified of thresholds
5. **Adjust as Needed**: Update budgets when necessary

## Next Steps

- [Budgets](/docs/resources/budgets) - Budget documentation
- [Work Orders](/docs/resources/work-orders) - Work order costs
- [Common Workflows](/docs/workflows/common-workflows) - Other workflows

