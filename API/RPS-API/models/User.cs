using System;

namespace RPS_API.models
{
    public class User
    {
        public string Username { get; set; }
        public double Wins { get; set; }
        public double GamesPlayed { get; set; }
        public double WinRatio { get; set; }
        public string LastFive { get; set; }


        public User(string username, int wins, int gamesPlayed)
        {
            this.Username = username;
            this.Wins = wins;
            this.GamesPlayed = gamesPlayed;
            CalcWinRatio();
            this.LastFive = null;
        }

        public void CalcWinRatio()
        {
            double ratio = (this.Wins / this.GamesPlayed) * 100;
            ratio = Math.Round(ratio);
            
            this.WinRatio = ratio;
        }
    }
}