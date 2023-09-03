namespace GamContentSystemApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = Host.CreateDefaultBuilder(args);
            var a = builder.ConfigureWebHostDefaults(builder => builder.UseStartup<Startup>());

            a.Start();
        }
    }
}