using System;

namespace RPS_API.models
{
    public class PlayRequest
    {
        public string Username { get; set; }
        public string PlayerChoice { get; set; }

        public PlayRequest()
        {
        }
    }
}