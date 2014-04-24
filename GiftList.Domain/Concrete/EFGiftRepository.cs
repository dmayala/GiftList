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

        public void SaveGift(Gift gift)
        {
            if (gift.Id != 0)
            {
                Gift match = context.Gifts.FirstOrDefault(m => m.Id == gift.Id);
                match.Price = gift.Price;
                match.Title = gift.Title;
            }
            else
            {
                context.Gifts.Add(new Gift
                {
                    Title = gift.Title,
                    Price = gift.Price
                });
            }

            context.SaveChanges();
        }
    }
}
