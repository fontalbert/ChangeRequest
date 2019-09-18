using DotNetNuke.Entities.Portals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Margin.Modules.SampleModule.Application
{
    public class Utils
    {
        public static string GetIP()
        {
            if (HttpContext.Current != null && HttpContext.Current.Request != null)
                return HttpContext.Current.Request.UserHostAddress;
            return "";
        }

        public static int GetUserId()
        {
            if (PortalSettings.Current != null)
                return PortalSettings.Current.UserId;
            return 0;
        }


    }
}