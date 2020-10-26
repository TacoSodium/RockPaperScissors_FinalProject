using System;

namespace RPS_API.models
{
    public class User
    {
        public string Username { get; set; }
        public int Wins { get; set; }
        public int TurnsPlayed { get; set; }
        public int WinRatio { get; set; }

        public User(string username, int wins, int turnsPlayed)
        {
            this.Username = username;
            this.Wins = wins;
            this.TurnsPlayed = turnsPlayed;
            this.WinRatio = CalcWinRatio();
        }

        public int CalcWinRatio()
        {
            int ratio = (this.Wins / this.TurnsPlayed) * 100;
            
            return ratio;
        }
    }
}