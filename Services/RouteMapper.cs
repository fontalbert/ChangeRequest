using DotNetNuke.Web.Api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Margin.Modules.ChangeRequest.Services
{
    public class RouteMapper : IServiceRouteMapper
    {
        public void RegisterRoutes(IMapRoute mapRouteManager)
        {
            mapRouteManager.MapHttpRoute("Margin/ChangeRequest", "default", "{controller}/{action}", new[] { "Margin.Modules.ChangeRequest.Controller" });
        }
    }
}