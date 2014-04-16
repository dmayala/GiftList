using GiftLift.Models;
using GiftList.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace GiftList
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            System.Data.Entity.Database.SetInitializer(new GiftDBInitializer());
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }

    public class GiftDBInitializer : DropCreateDatabaseAlways<GiftDbContext>
    {
        protected override void Seed(GiftDbContext context)
        {

            var gifts = new List<Gift> {
                new Gift() { Price = 49.95, Title = "Tall Hat" },
                new Gift() { Price = 78.25, Title = "Long Cloak" }
            };

            gifts.ForEach(g => context.Gifts.Add(g));
            base.Seed(context);
        }
    }
}
