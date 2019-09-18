using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Margin.Modules.ChangeRequest.Data
{
    public class ChangeRequestDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Justification { get; set; }
        public string Impact { get; set; }
        public string RequestDate { get; set; }
        public string RequestBy { get; set; }
        public string Status { get; set; }
        public string Priority { get; set; }
        public int CRUser { get; set; }
        public string CRDate { get; set; }
        public string CRIP { get; set; }
        public int LMUser { get; set; }
        public string LMDate { get; set; }
        public string LMIP { get; set; }
    }
}