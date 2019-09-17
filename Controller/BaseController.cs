using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Users;
using DotNetNuke.Services.Exceptions;
using DotNetNuke.Services.Localization;
using DotNetNuke.Web.Api;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Http;
using System.Web.UI.WebControls;
using System.Xml;

namespace Margin.Modules.ChangeRequest.Controller
{
    public class BaseController : DnnApiController
    {
        protected string mainFile = "/DesktopModules/Margin/ChangeRequest/App_LocalResources/Main.resx";
        protected string changeRequestFile = "/DesktopModules/Margin/ChangeRequest/App_LocalResources/ChangeRequest.resx";

    }
}