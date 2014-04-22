using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using GiftList.Domain.Abstract;
using Moq;
using GiftList.Domain;
using System.Collections.Generic;
using System.Linq;
using GiftLift.Controllers;
using System.Web.Mvc;

namespace GiftList.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void Can_Return_Gifts_JSON()
        {
            // Arrange
            Mock<IGiftRepository> mock = new Mock<IGiftRepository>();
            mock.Setup(m => m.Gifts).Returns(new Gift[] {
                new Gift {Title = "Tall Hat", Price = 49.95 },
                new Gift { Title = "Toy Train", Price = 29.99 }
            }.AsQueryable());


            HomeController ctrl = new HomeController(mock.Object);

            // Act
            List<Gift> result = ctrl.AllGift().Data as List<Gift>;

            // Assert
            Assert.AreEqual("Tall Hat", result[0].Title);
            Assert.AreEqual("Toy Train", result[1].Title);
        }
    }
}
