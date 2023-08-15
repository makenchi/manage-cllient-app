using ManageClientAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace ManageClientAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Category> Categories { get; set; }
    }
}
