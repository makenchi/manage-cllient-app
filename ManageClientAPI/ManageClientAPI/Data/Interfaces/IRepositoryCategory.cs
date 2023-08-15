using ManageClientAPI.Entities;

namespace ManageClientAPI.Data.Interfaces
{
    public interface IRepositoryCategory
    {
        Task Add(Category category);
        Task Update(Category category);
        Task Delete(Category category);
        Task<Category> GetById(int id);
        Task<List<Category>> GetAll();
    }
}
