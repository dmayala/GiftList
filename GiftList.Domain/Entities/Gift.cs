using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GiftList.Domain
{
    public class Gift
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public double Price { get; set; }
    }
}
