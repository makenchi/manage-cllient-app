using ManageClientAPI.Dtos;
using ManageClientAPI.Entities;
using ManageClientAPI.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ManageClientAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpPost]
        public async Task<ActionResult<CategoryResponseDto>> Add(CategoryAddRequestDto request)
        {
            CategoryResponseDto response = new CategoryResponseDto();
            try
            {
                Category category = new Category()
                {
                    Name = request.Name
                };
                await _categoryService.addCategory(category);

                response.Code = 200;
                response.Text = "Categoria cadastrada com sucesso";
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Code = ex.HResult;
                response.Text = ex.Message;
            }

            return BadRequest(response);
        }

        [HttpPatch]
        public async Task<ActionResult<CategoryResponseDto>> Update(CategoryUpdateRequestDto request)
        {
            CategoryResponseDto response = new CategoryResponseDto();
            try
            {
                var category = await _categoryService.GetCategoryById(request.Id);
                if (category == null)
                {
                    response.Code = 404;
                    response.Text = "Categoria não encontrada";

                    return NotFound(response);
                }

                category.Name = request.Name;
                await _categoryService.updateCategory(category);

                response.Code = 200;
                response.Text = "Categoria atualizada com sucesso";
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Code=ex.HResult;
                response.Text=ex.Message;
            }

            return BadRequest(response);
        }

        [HttpDelete]
        public async Task<ActionResult<CategoryResponseDto>> Delete(CategoryRequestDto request)
        {
            CategoryResponseDto response = new CategoryResponseDto();
            try
            {
                var category = await _categoryService.GetCategoryById(request.Id);
                if (category == null)
                {
                    response.Code = 404;
                    response.Text = "Categoria não encontrada";

                    return NotFound(response);
                }

                await _categoryService.removeCategory(category);

                response.Code = 200;
                response.Text = "Categoria excluída com sucesso";
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Code = ex.HResult;
                response.Text = ex.Message;
            }

            return BadRequest(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CategoryListResponseDto>> Get(Guid id)
        {
            CategoryListResponseDto response = new CategoryListResponseDto();

            var category = await _categoryService.GetCategoryById(id);
            if (category != null)
            {
                List<Category> categories = new List<Category>();
                categories.Add(category);
                response.Categories = categories;
            }

            return Ok(response);
        }

        [HttpGet]
        public async Task<ActionResult<CategoryListResponseDto>> GetAll()
        {
            CategoryListResponseDto response = new CategoryListResponseDto();

            var categories = await _categoryService.GetAllCategories();
            List<Category> categoryList = new List<Category>();
            categoryList.AddRange(categories);
            response.Categories = categoryList;

            return Ok(response);
        }
    }
}
