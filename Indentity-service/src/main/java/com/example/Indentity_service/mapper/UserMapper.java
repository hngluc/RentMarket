package com.example.Indentity_service.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import com.example.Indentity_service.dto.request.UserCreationRequest;
import com.example.Indentity_service.dto.request.UserUpdateRequest;
import com.example.Indentity_service.dto.response.UserResponse;
import com.example.Indentity_service.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserCreationRequest request);

    UserResponse toUserResponse(User user);

    @Mapping(target = "roles", ignore = true)
    void updateUser(@MappingTarget User user, UserUpdateRequest request);
}
