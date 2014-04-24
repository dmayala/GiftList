using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftList.Domain.Abstract
{
    public interface IGiftRepository
    {
        IQueryable<Gift> Gifts { get; }

        void SaveGift(Gift gift);
    }
}
