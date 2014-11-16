using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(GiftList.ReactConfig), "Configure")]

namespace GiftList
{
	public static class ReactConfig
	{
		public static void Configure()
		{
            ReactSiteConfiguration.Configuration = new ReactSiteConfiguration()
                .SetUseHarmony(true)
                .AddScript("~/Scripts/bundle.js");
		}
	}
}