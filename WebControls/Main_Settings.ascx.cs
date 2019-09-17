using System;
using DotNetNuke.Services.Exceptions;
using DotNetNuke.Entities.Modules;

namespace Margin.Modules.ChangeRequest
{
    public partial class Main_Settings : ModuleSettingsBase
    {
        public override void LoadSettings()
        {
            //if (Settings["settingname"] != null)
            //	txtSummary.Text = Settings["settingname"].ToString();
        }

        public override void UpdateSettings()
        {
            //ModuleController mc = new ModuleController();
            //mc.UpdateModuleSetting(ModuleId, "settingname", txtSummary.Text);
        }
    }
}

