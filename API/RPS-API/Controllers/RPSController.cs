using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using RPS_API.models;
using System.Linq;

namespace RPS_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RPSController : ControllerBase
    {

        public static List<User> Positions = new List<User>();

        public RPSController()
        {

        }

        // POST: /RPS
        [HttpPost]
        public Round PlayRequest([FromBody] PlayRequest request)
        {
            Round r = new Round(request.Username, request.PlayerChoice);

            User user = null;
            User found = Positions.Find(u => u.Username == request.Username);

            if (found == null)
            {
                user = new User(request.Username, 0, 1);
                Positions.Add(user);
            }
            else
            {
                user = found;
                user.TurnsPlayed++;
            }

            if (r.Result == "You win")
            {
                user.Wins++;
            }

            user.CalcWinRatio();

            return r;
        }

        // POST: /RPS/leaderboard
        [HttpGet("Leaderboard")]
        public List<User> ViewLeaderBoard()
        {
            List<User> LeaderboardView = Positions.OrderByDescending(u => u.WinRatio).ToList();

            return LeaderboardView;
        }
    }
}