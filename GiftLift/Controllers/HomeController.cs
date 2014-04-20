using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using GiftList.Domain.Abstract;

namespace GiftLift.Controllers
{
    public class HomeController : Controller
    {
        private IGiftRepository repository;

        public HomeController(IGiftRepository repository)
        {
            this.repository = repository;
        }

        // GET: /Home/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AllGift()
        {
            return Json(repository.Gifts.ToList(), JsonRequestBehavior.AllowGet);
        }
    }
}
