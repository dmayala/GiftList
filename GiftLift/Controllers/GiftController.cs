using GiftList.Domain;
using GiftList.Domain.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace GiftLift.Controllers
{
    public class GiftController : ApiController
    {
        private IGiftRepository repository;

        public GiftController(IGiftRepository repository)
        {
            this.repository = repository;
        }

        // GET api/<controller>
        public IEnumerable<Gift> Get()
        {
            return repository.Gifts.AsEnumerable();
        }

        //// GET api/<controller>/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/<controller>
        public Object Post(IEnumerable<Gift> gifts)
        {
            int result = 0;

            foreach (var i in gifts)
            {
                if (ModelState.IsValid)
                {
                    result += repository.SaveGift(i);
                }
            }

            return new { Count = result };
        }

        //// PUT api/<controller>/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //public void Delete(int id)
        //{
        //}
    }
}