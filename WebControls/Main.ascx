<%@ Control language="C#" Inherits="Margin.Modules.ChangeRequest.Main" AutoEventWireup="true" Codebehind="Main.ascx.cs" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<div id="entry" 
    data-changerequesturl="<%=EditUrl("changerequest") %>" 
    data-moduleid="<%= ModuleId %>"></div>
<dnn:DnnJsInclude runat="server" FilePath="/DesktopModules/Margin/ChangeRequest/Content/js/bundles/vendor.js" />
<dnn:DnnJsInclude runat="server" FilePath="/DesktopModules/Margin/ChangeRequest/Content/js/bundles/main.js" />
