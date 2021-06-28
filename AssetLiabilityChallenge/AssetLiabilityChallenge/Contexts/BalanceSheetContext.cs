using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Configuration;

namespace AssetLiabilityChallenge.Contexts
{
    public class BalanceSheetContext : DbContext
    {
        //public BalanceSheetContext()
        //{
        //}

        public BalanceSheetContext(DbContextOptions<BalanceSheetContext> options)
            : base(options)
        { }
        public DbSet<BalanceSheetItem> BalanceSheetItems { get; set; }
    }
}
