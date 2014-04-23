using Ninject;
using System;
using System.Web.Mvc;
using System.Web.Routing;

namespace GiftLift.Infrastructure
{
    public class NinjectControllerFactory : DefaultControllerFactory
    {
        private IKernel kernel;

        public NinjectControllerFactory(IKernel kernel)
        {
            this.kernel = kernel;
        }

        protected override IController GetControllerInstance(RequestContext requestContext, Type controllerType)
        {

            return controllerType == null ? null : (IController) kernel.Get(controllerType);
        }

        
    }
}