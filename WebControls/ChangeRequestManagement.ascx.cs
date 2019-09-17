using System;
using DotNetNuke.Services.Exceptions;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Modules.Actions;
using DotNetNuke.Services.Localization;
using DotNetNuke.Security;

namespace Margin.Modules.SampleModule
{
    public partial class ChangeRequestManagement : PortalModuleBase
    {
        private void Page_Load(object sender, System.EventArgs e)
        {
            DotNetNuke.Framework.ServicesFramework.Instance.RequestAjaxScriptSupport();
        }
    }
}
