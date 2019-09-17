using System;
using DotNetNuke.Services.Exceptions;
using DotNetNuke.Entities.Modules;

namespace Margin.Modules.ChangeRequest
{
    public partial class Main_Edit : PortalModuleBase
    {
        private void Page_Load(object sender, System.EventArgs e)
        {
            try
            {


            }
            catch (Exception exc)
            {
                Exceptions.ProcessModuleLoadException(this, exc);
            }
        }
    }
}