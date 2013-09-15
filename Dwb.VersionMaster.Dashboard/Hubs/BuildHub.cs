using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using Microsoft.Practices.ServiceLocation;
using SignalR;
using SignalR.Hubs;
using Dwb.VersionMaster.Dashboard.Services;
using Dwb.VersionMaster.Dashboard.Models.BuildQueue;

namespace Dwb.VersionMaster.Dashboard.Hubs
{
    [HubName("BuildHub")]
    public class BuildHub : Hub
    {
        private BuildService _buildService;
        IHubContext _hubContext;
        Queue _queue;

        public BuildHub()
        {
            //Accept incoming call from Client to initialize KioskHub object
            _hubContext = GlobalHost.ConnectionManager.GetHubContext<BuildHub>();
            _buildService = ServiceLocator.Current.GetInstance<BuildService>();

            #region Sample Data



            #endregion
        }

        public void GetBuildQueue()
        {
            _hubContext.Clients.getQueue(_queue);
        }
    }
}