using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AssetLiabilityChallenge.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BalanceSheetController : ControllerBase
    {

        private readonly ILogger<BalanceSheetController> _logger;

        public BalanceSheetController(ILogger<BalanceSheetController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<BalanceSheet> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new BalanceSheet
            {
                Id = 999,
                Type = BalanceSheetType.ASSET,
                Name = "Car",
                Balance = 1234.56
            })
            .ToArray();
        }
    }
}
