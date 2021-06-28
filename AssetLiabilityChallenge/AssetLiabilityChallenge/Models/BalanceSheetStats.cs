using AssetLiabilityChallenge.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AssetLiabilityChallenge.Models
{
    public class BalanceSheetStats
    {
        private BalanceSheetContext _db;
        public BalanceSheetStats(BalanceSheetContext db)
        {
            _db = db;
        }
        public double NetWorth
        {
            get
            {
                return AssetsTotal - LiabilitiesTotal;
            }
        }
        public double AssetsTotal
        {
            get
            {
                return _db.BalanceSheetItems
                    .Where(item => item.Type == BalanceSheetItemType.ASSET)
                    .Sum(item => item.Balance);
            }
        }
        public double LiabilitiesTotal
        {
            get
            {
                return _db.BalanceSheetItems
                    .Where(item => item.Type == BalanceSheetItemType.LIABILITY)
                    .Sum(item => item.Balance);
            }
        }
    }
}
