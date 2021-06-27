using System;

namespace AssetLiabilityChallenge
{
    public class BalanceSheet
    {
        public int Id { get; set; }
        public BalanceSheetType Type { get; set; }
        public string Name { get; set; }
        public double Balance { get; set; }
    }
}
