using System;

namespace RPS_API.models
{
    public class User
    {
        public string Username { get; set; }
        public int Wins { get; set; }
        public int TurnsPlayed { get; set; }
        public double WinRatio { get; set; }

        public User(string username, int wins, int turnsPlayed)
        {
            this.Username = username;
            this.Wins = wins;
            this.TurnsPlayed = turnsPlayed;
            CalcWinRatio();
        }

        public void CalcWinRatio()
        {
            double ratio = (this.Wins / this.TurnsPlayed) * 100;
            ratio = Math.Round(ratio);
            
            this.WinRatio = ratio;
        }
    }
}