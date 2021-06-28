using AssetLiabilityChallenge.Contexts;
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
        private BalanceSheetContext _db;

        public BalanceSheetController(ILogger<BalanceSheetController> logger, BalanceSheetContext db)
        {
            _logger = logger;
            _db = db;
        }

        [HttpGet]
        public IEnumerable<BalanceSheetItem> Get()
        {
            return _db.BalanceSheetItems.ToArray();
        }

        [HttpPost]
        public Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<BalanceSheetItem> Add(BalanceSheetItem item)
        {
            return _db.Add(item);
        }
    }
}
