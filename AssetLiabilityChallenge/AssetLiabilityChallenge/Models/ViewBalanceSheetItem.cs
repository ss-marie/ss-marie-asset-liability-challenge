using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AssetLiabilityChallenge.Models
{
    public class ViewBalanceSheetItem : BalanceSheetItem
    {
        public string TypeString
        {
            get => Enum.GetName(typeof(BalanceSheetItemType), Type);
        }
    }
}
