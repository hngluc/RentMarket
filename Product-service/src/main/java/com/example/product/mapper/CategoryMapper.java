package com.example.product.mapper;

import com.example.product.dto.request.CreateCategoryRequest;
import com.example.product.dto.request.UpdateCategoryRequest;
import com.example.product.dto.response.CategoryResponse;
import com.example.product.entity.Category;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface CategoryMapper {

    Category toCategory(CreateCategoryRequest request);

    CategoryResponse toCategoryResponse(Category category);

    void updateCategory(@MappingTarget Category category, UpdateCategoryRequest request);
}
