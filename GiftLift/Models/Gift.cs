using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GiftList.Models
{
    public class Gift
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public double Price { get; set; }
    }
}