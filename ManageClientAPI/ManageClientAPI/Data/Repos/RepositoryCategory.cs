using ManageClientAPI.Data.Interfaces;
using ManageClientAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace ManageClientAPI.Data.Repos
{
    public class RepositoryCategory : IRepositoryCategory
    {
        private readonly DataContext _context;
        public RepositoryCategory(DataContext context)
        {
            _context = context;
        }

        public async Task Add(Category category)
        {
            try
            {
                _context.Categories.Add(category);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public async Task Delete(Category category)
        {
            try
            {
                _context.Categories.Remove(category);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public async Task<List<Category>> GetAll()
        {
            return await _context.Categories.ToListAsync();
        }

        public async Task<Category> GetById(int id)
        {
            return await _context.Categories.FindAsync(id);
        }

        public async Task Update(Category category)
        {
            try
            {
                _context.Categories.Update(category);
                await _context.Categories.SingleAsync();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
