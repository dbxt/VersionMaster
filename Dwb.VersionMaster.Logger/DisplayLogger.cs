using System;
using System.IO;
using System.Security;
using Microsoft.Build.Framework;
using Microsoft.Build.Utilities;

namespace Dwb.VersionMaster.Loggers
{
    class DisplayLogger : ILogger
    {
        public void Initialize(IEventSource eventSource)
        {
            throw new NotImplementedException();
        }

        public string Parameters
        {
            get
            {
                throw new NotImplementedException();
            }
            set
            {
                throw new NotImplementedException();
            }
        }

        public void Shutdown()
        {
            throw new NotImplementedException();
        }

        public LoggerVerbosity Verbosity
        {
            get
            {
                throw new NotImplementedException();
            }
            set
            {
                throw new NotImplementedException();
            }
        }
    }
}
