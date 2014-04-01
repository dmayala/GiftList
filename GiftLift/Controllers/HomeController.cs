using GiftList.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GiftList.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var initialState = new[] {
                new GiftModel { Title = "Tall Hat", Price = 49.95 },
                new GiftModel { Title = "Long Cloak", Price = 78.25 }
            };
            return View(initialState);
        }
    }
}