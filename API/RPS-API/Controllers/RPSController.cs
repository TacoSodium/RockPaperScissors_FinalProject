using System;
using Microsoft.AspNetCore.Mvc;
using RPS_API.models;

namespace RPS_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RPSController : ControllerBase
    {
        [HttpPost]
        public Round PlayRequest(PlayRequest playerChoice)
        {
            string choice = playerChoice.PlayerChoice;

            Round r = new Round(choice);

            return r;
        }
    }
}