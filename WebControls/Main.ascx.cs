using System;
using DotNetNuke.Services.Exceptions;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Modules.Actions;
using DotNetNuke.Services.Localization;
using DotNetNuke.Security;

namespace Margin.Modules.ChangeRequest
{
    public partial class Main : PortalModuleBase, IActionable
    {
        private void Page_Load(object sender, System.EventArgs e)
        {
            DotNetNuke.Framework.ServicesFramework.Instance.RequestAjaxScriptSupport();
        }

        #region Optional Interfaces

        public ModuleActionCollection ModuleActions
        {
            get
            {
                ModuleActionCollection Actions = new ModuleActionCollection();
                Actions.Add(GetNextActionID(), Localization.GetString("EditModule", this.LocalResourceFile), "", "", "", EditUrl(), false, SecurityAccessLevel.Edit, true, false);
                return Actions;
            }
        }

        #endregion
    }
}
