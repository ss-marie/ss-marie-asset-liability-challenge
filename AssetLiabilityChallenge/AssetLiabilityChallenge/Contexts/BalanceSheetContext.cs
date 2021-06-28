using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AssetLiabilityChallenge.Contexts
{
    public class BalanceSheetContext : DbContext
    {
        public BalanceSheetContext(DbContextOptions<BalanceSheetContext> options)
            : base(options)
        { }
        public DbSet<BalanceSheetItem> BalanceSheetItems { get; set; }
    }
}
