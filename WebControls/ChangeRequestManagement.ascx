<%@ Control language="C#" Inherits="Margin.Modules.SampleModule.ChangeRequestManagement" AutoEventWireup="true" Codebehind="ChangeRequestManagement.ascx.cs" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<div id="entry"
    data-mainurl="<%=DotNetNuke.Common.Globals.NavigateURL(TabId) %>" 
    data-moduleid="<%= ModuleId %>"></div>

<dnn:DnnJsInclude runat="server" FilePath="/DesktopModules/Margin/ChangeRequest/Content/js/bundles/vendor.js" />
<dnn:DnnJsInclude runat="server" FilePath="/DesktopModules/Margin/ChangeRequest/Content/js/bundles/changerequest.js" />
<dnn:DnnJsInclude runat="server" FilePath="/DesktopModules/Margin/ChangeRequest/Content/js/libraries/parsleyjs/parsley.min.js" />