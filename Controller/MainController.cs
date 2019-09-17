using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Users;
using DotNetNuke.Services.Exceptions;
using DotNetNuke.Services.Localization;
using DotNetNuke.Web.Api;
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
    public class ModuleController : DnnApiController
    {
        [HttpGet]
        [DnnAuthorize]
        public HttpResponseMessage Start(int userId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, new
                {
                    result = "OK"
                });
            }
            catch (Exception ex)
            {
                Exceptions.LogException(ex);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, new
                {
                    result = "KO",
                    message = ex.Message
                });
            }
        }
    }
}