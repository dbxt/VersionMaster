using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dwb.VersionMaster.Dashboard.Models.BuildQueue
{
    public class Task
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public DateTime Added { get; set; }
        public string AddedBy { get; set; }
    }
}