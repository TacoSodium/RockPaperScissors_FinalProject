using System;

namespace RPS_API.models
{
    public class Round
    {
        public string Username { get; set; }
        public string PlayerChoice { get; set; }
        public string CPUChoice { get; set; }
        public string Result { get; set; }

        public Round(string username, string playerChoice)
        {
            this.Username = username;
            this.PlayerChoice = playerChoice;
            this.CPUChoice = MakeCPUchoice();
            this.Result = GetResult();
        }

        public string MakeCPUchoice()
        {
            Random r = new Random();
            int rChoice = r.Next(3);

            switch (rChoice)
            {
                case 0:
                    return "rock";
                case 1:
                    return "paper";
                case 2:
                    return "scissors";
                default:
                    return "CPU choice error";
            }
        }

        public string GetResult()
        {
            // case "rock"
            if (this.CPUChoice == "rock" && this.PlayerChoice == "rock")
            {
                return "It's a draw";
            }
            else if (this.CPUChoice == "rock" && this.PlayerChoice == "scissors")
            {
                return "You lose";
            }
            else if (this.CPUChoice == "rock" && this.PlayerChoice == "paper")
            {
                return "You win";
            }

            // case "paper"
            else if (this.CPUChoice == "paper" && this.PlayerChoice == "rock")
            {
                return "You lose";
            }
            else if (this.CPUChoice == "paper" && this.PlayerChoice == "paper")
            {
                return "It's a draw";
            }
            else if (this.CPUChoice == "paper" && this.PlayerChoice == "scissors")
            {
                return "You win";
            }

            // case "scissors"
            else if (this.CPUChoice == "scissors" && this.PlayerChoice == "rock")
            {
                return "You win";
            }
            else if (this.CPUChoice == "scissors" && this.PlayerChoice == "paper")
            {
                return "You lose";
            }
            else if (this.CPUChoice == "scissors" && this.PlayerChoice == "scissors")
            {
                return "It's a draw";
            }

            else
            {
                return "Result calculation error";
            }
        }
    }
}