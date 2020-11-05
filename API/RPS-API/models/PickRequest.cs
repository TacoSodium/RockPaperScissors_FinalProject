using System;

namespace RPS_API.models
{
    public class PickRequest
    {
        public string Username { get; set; }
        public string PlayerChoice { get; set; }
        public int TurnNo { get; set; }

        public PickRequest()
        {
        }
    }
}