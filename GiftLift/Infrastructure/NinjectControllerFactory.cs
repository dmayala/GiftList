﻿using GiftList.Domain;
using GiftList.Domain.Abstract;
using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Moq;

namespace GiftLift.Infrastructure
{
    public class NinjectControllerFactory : DefaultControllerFactory
    {
        private IKernel kernel;

        public NinjectControllerFactory()
        {
            kernel = new StandardKernel();
            AddBindings();
        }

        protected override IController GetControllerInstance(RequestContext requestContext, Type controllerType)
        {

            return controllerType == null ? null : (IController) kernel.Get(controllerType);
        }

        private void AddBindings()
        {
            Mock<IGiftRepository> mock = new Mock<IGiftRepository>();
            mock.Setup(m => m.Gifts).Returns(new List<Gift> {
                new Gift { Title = "Tall Hat", Price = 49.95 }
            }.AsQueryable());

            kernel.Bind<IGiftRepository>().ToConstant(mock.Object);
        }
    }
}