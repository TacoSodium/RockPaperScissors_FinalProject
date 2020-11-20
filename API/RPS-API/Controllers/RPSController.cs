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

        public static List<Game> OpenGames = new List<Game>();
        public static List<User> Positions = new List<User>();

        public RPSController()
        {

        }

        // POST: /RPS
        [HttpPost]
        public Game PlayRequest([FromBody] PlayRequest request)
        {
            Game g = new Game(request.Username, request.RoundChoice);

            foreach (Game game in OpenGames)
            {
                if (game.Username == request.Username)
                {
                    OpenGames.Remove(g);
                }
            }

            OpenGames.Add(g);

            return g;
        }

        //POST /RPS/pick
        [HttpPost("pick")]
        public Game PickChoice([FromBody] PickRequest request)
        {
            Game game = OpenGames.Find(g => g.Username == request.Username);

            Round r = new Round(request.Username, request.TurnNo, request.PlayerChoice);
            game.Rounds.Add(r);

            if (r.Result == "You win")
            {
                game.WinTracking++;
            }

            if (r.TurnNo == game.NoTurns)
            {
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
                    user.GamesPlayed++;
                }

                if (game.NoTurns == 1)
                {
                    game.Result = r.Result;
                }
                else
                {
                    if (game.WinTracking > game.NoTurns / 2)
                    {
                        game.Result = "You win";
                        user.ConcatLastFive('W');
                        user.Wins++;
                    }
                    else if (game.WinTracking < game.NoTurns / 2)
                    {
                        game.Result = "You lose";
                        user.ConcatLastFive('L');
                    }
                    else
                    {
                        game.Result = "It's a draw";
                        user.ConcatLastFive('D');
                    }

                    user.CalcWinRatio();
                }
            }

            return game;
        }

        // GET: /RPS/leaderboard
        [HttpGet("leaderboard")]
        public List<User> ViewLeaderBoard()
        {
            List<User> LeaderboardView = Positions.OrderByDescending(u => u.WinRatio).ToList();

            return LeaderboardView;
        }
    }
}