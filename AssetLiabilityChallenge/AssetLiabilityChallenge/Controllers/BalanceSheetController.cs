using AssetLiabilityChallenge.Contexts;
using AssetLiabilityChallenge.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using FromBodyAttribute = Microsoft.AspNetCore.Mvc.FromBodyAttribute;
using HttpDeleteAttribute = Microsoft.AspNetCore.Mvc.HttpDeleteAttribute;
using HttpGetAttribute = Microsoft.AspNetCore.Mvc.HttpGetAttribute;
using HttpPostAttribute = Microsoft.AspNetCore.Mvc.HttpPostAttribute;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

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
            return _db.BalanceSheetItems.OrderBy(item => item.Id).ToArray();
        }

        [HttpGet("getStats")]
        public BalanceSheetStats GetStats()
        {
            return new BalanceSheetStats(_db);
        }

        [HttpPost]
        public void Add(BalanceSheetItem item)
        {
            _db.Add(item);
            _db.SaveChanges();
        }

        [HttpDelete]
        public void Delete([FromBody]int id)
        {
            var entity = _db.BalanceSheetItems.First(item => item.Id == id);
            if (entity != null)
            {
                _db.Remove(entity);
                _db.SaveChanges();
            } 
        }
    }
}
