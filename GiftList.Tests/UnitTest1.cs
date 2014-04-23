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
        public void Can_Return_Gifts()
        {
            // Arrange
            Mock<IGiftRepository> mock = new Mock<IGiftRepository>();
            mock.Setup(m => m.Gifts).Returns(new Gift[] {
                new Gift {Id = 101, Title = "Tall Hat", Price = 49.95 },
                new Gift { Id = 107, Title = "Toy Train", Price = 29.99 }
            }.AsQueryable());


            GiftController ctrl = new GiftController(mock.Object);

            // Act
            List<Gift> result = ctrl.Get().ToList();

            // Assert
            Assert.AreEqual(101, result[0].Id);
            Assert.AreEqual(107, result[1].Id);
        }
    }
}
