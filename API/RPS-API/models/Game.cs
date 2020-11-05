using System;
using System.Collections.Generic;

namespace RPS_API.models
{
    public class Game
    {
        public string Username { get; set; }
        public int NoTurns { get; set; }
        public DateTime DateStarted { get; set; }
        public int WinTracking { get; set; }
        public List<Round> Rounds { get; set; }
        public string Result { get; set; }

        public Game(string username, int noTurns)
        {
            this.Username = username;
            this.NoTurns = noTurns;
            this.DateStarted = DateTime.Now;
            this.WinTracking = 0;
            this.Rounds = new List<Round>();
            this.Result = null;
        }
    }
}