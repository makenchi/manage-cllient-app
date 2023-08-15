using ManageClientAPI.Data.Interfaces;
using ManageClientAPI.Entities;
using ManageClientAPI.Services.Interfaces;

namespace ManageClientAPI.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IRepositoryCategory _repositoryCategory;
        public CategoryService(IRepositoryCategory repositoryCategory)
        {
            _repositoryCategory = repositoryCategory;
        }

        public async Task addCategory(Category category)
        {
            await _repositoryCategory.Add(category);
        }

        public async Task<List<Category>> GetAllCategories()
        {
            var categories = await _repositoryCategory.GetAll();
            return categories.ToList();
        }

        public async Task<Category> GetCategoryById(Guid id)
        {
            var category = await _repositoryCategory.GetById(id);
            if (category != null)
            {
                Category c = new Category()
                {
                    Id = category.Id,
                    Name = category.Name
                };

                return c;
            }
            return category;
        }

        public async Task removeCategory(Category category)
        {
            await _repositoryCategory.Delete(category);
        }

        public async Task updateCategory(Category category)
        {
            await _repositoryCategory.Update(category);
        }
    }
}
