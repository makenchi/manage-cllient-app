using ManageClientAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace ManageClientAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {            
            optionsBuilder.UseInMemoryDatabase(databaseName: "manageclientdb");
        }

        public DbSet<Category> Categories { get; set; }
    }
}
