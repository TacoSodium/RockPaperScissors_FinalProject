using System;

namespace RPS_API.models
{
    public class PlayRequest
    {
        public string Username { get; set; }
        public int RoundChoice { get; set; }

        public PlayRequest()
        {
        }
    }
}