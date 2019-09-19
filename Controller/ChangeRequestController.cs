using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Users;
using DotNetNuke.Services.Exceptions;
using DotNetNuke.Services.Localization;
using DotNetNuke.Web.Api;
using Margin.Modules.ChangeRequest.Data;
using Margin.Modules.ChangeRequest.Services;
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
    public class ChangeRequestController : DnnApiController
    {
        [HttpPost]
        [DnnAuthorize]
        public HttpResponseMessage Save(ChangeRequestDTO obj)
        {
            try
            {
                ChangeRequestService.Save(obj);

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

        [HttpGet]
        [DnnAuthorize]
        public HttpResponseMessage Get(int id)
        {
            try
            {
                var changerequest = ChangeRequestService.Get(id);

                return Request.CreateResponse(HttpStatusCode.OK, new
                {
                    result = "OK",
                    changerequest
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