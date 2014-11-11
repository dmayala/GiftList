using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GiftList.Startup))]
namespace GiftList
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
