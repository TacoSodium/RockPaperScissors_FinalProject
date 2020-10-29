using System;
using Xunit;
using RPS_API.Controllers;
using RPS_API.models;

namespace tests
{
    public class UnitTest1
    {
        [Fact]
        public void CalcWinRatioTest()
        {
            User u = new User("coryn", 2, 4);
            u.CalcWinRatio();

            Assert.Equal(50, u.WinRatio);
        }
    }
}
