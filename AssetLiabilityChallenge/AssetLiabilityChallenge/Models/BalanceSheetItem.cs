using System;

namespace AssetLiabilityChallenge
{
    public class BalanceSheetItem
    {
        public int Id { get; set; }
        public BalanceSheetItemType Type { get; set; }
        public string Name { get; set; }
        public double Balance { get; set; }
    }
}
