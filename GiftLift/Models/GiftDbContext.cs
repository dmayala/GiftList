using GiftList.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace GiftLift.Models
{
    public class GiftDbContext : DbContext
    {
        public DbSet<Gift> Gifts { get; set; } 
    }
}