using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace GiftList.Domain.Concrete
{
    public class EFDbContext : DbContext
    {
        public DbSet<Gift> Gifts { get; set; }
    }
}
