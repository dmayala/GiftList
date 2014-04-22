using GiftList.Domain.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftList.Domain.Concrete
{
    public class EFGiftRepository : IGiftRepository
    {
        private EFDbContext context = new EFDbContext();

        public IQueryable<Gift> Gifts
        {
            get
            {
                return context.Gifts;
            }
        }
    }
}
