using Margin.Modules.ChangeRequest.Data;
using Margin.Modules.SampleModule.Application;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Margin.Modules.ChangeRequest.Services
{
    public class ChangeRequestService
    {

        public static void Save(ChangeRequestDTO obj)
        {
            using (var ctx = new ModuleContext())
            {
                using (var t = ctx.Database.BeginTransaction())
                {
                    DateTime requestDate = DateTime.Today;
                    DateTime d;
                    if (DateTime.TryParse(obj.RequestDate, out d))
                    {
                        requestDate = d;
                    }

                    //Save ChangeRequest
                    Data.ChangeRequest cr = new Data.ChangeRequest();
                    if (obj.Id > 0)
                    {
                        cr = ctx.ChangeRequest.Where(x => x.Id == obj.Id).FirstOrDefault();
                    }

                    if (cr == null)
                    {
                        throw new Exception("This element doesn't exist in the DB.");
                    }

                    cr.Title = obj.Title;
                    cr.Description = obj.Description;
                    cr.Justification = obj.Justification;
                    cr.Impact = obj.Impact;
                    cr.RequestBy = obj.RequestBy;
                    cr.RequestDate = requestDate;
                    cr.Status = obj.Status;
                    cr.Priority = obj.Priority;

                    cr.LMUser = Utils.GetUserId();
                    cr.LMDate = DateTime.Now;
                    cr.LMIP = Utils.GetIP();

                    if (obj.Id == 0)
                    {
                        cr.CRUser = Utils.GetUserId();
                        cr.CRDate = DateTime.Now;
                        cr.CRIP = Utils.GetIP();
                        ctx.ChangeRequest.Add(cr);
                    }

                    ctx.SaveChanges();

                    t.Commit();
                }
            }
        }
    }
}