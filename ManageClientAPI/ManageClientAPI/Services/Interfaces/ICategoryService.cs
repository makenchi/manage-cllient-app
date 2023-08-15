using ManageClientAPI.Entities;

namespace ManageClientAPI.Services.Interfaces
{
    public interface ICategoryService
    {
        Task addCategory(Category category);
        Task removeCategory(Category category);
        Task updateCategory(Category category);
        Task<List<Category>> GetAllCategories();
        Task<Category> GetCategoryById(Guid id);
    }
}
