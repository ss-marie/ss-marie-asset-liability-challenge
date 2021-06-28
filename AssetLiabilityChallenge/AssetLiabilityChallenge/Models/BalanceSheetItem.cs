using System;
using System.Globalization;

namespace AssetLiabilityChallenge
{
    public class BalanceSheetItem
    {
        public int Id { get; set; }
        public BalanceSheetItemType Type { get; set; }
        public string Name { get; set; }
        public double Balance { get; set; }
        public string TypeString
        {
            get
            {
                TextInfo textInfo = new CultureInfo("en-US", false).TextInfo;
                string enumName = Enum.GetName(typeof(BalanceSheetItemType), Type);
                string titleCaseName = textInfo.ToTitleCase(textInfo.ToLower(enumName));
                return titleCaseName;
            }
        }
    }
}
