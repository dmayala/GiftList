using System.Web.Mvc;

namespace GiftList.Controllers
{
    public class HomeController : Controller 
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
