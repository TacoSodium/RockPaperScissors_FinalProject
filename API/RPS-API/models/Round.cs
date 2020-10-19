using System;

namespace RPS_API.models
{
    public class Round
    {
        public string PlayerChoice { get; set; }
        public string CPUChoice { get; set; }
        public string Result { get; set; }

        public Round(string playerChoice)
        {
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
                return "draw";
            }
            else if (this.CPUChoice == "rock" && this.PlayerChoice == "scissors")
            {
                return "lose";
            }
            else if (this.CPUChoice == "rock" && this.PlayerChoice == "paper")
            {
                return "win";
            }

            // case "paper"
            else if (this.CPUChoice == "paper" && this.PlayerChoice == "rock")
            {
                return "lose";
            }
            else if (this.CPUChoice == "paper" && this.PlayerChoice == "paper")
            {
                return "draw";
            }
            else if (this.CPUChoice == "paper" && this.PlayerChoice == "scissors")
            {
                return "win";
            }

            // case "scissors"
            else if (this.CPUChoice == "scissors" && this.PlayerChoice == "rock")
            {
                return "win";
            }
            else if (this.CPUChoice == "scissors" && this.PlayerChoice == "paper")
            {
                return "lose";
            }
            else if (this.CPUChoice == "scissors" && this.PlayerChoice == "scissors")
            {
                return "draw";
            }

            else
            {
                return "Result calculation error";
            }
        }
    }
}