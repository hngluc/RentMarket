package com.example.Indentity_service.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.Indentity_service.dto.request.RoleRequest;
import com.example.Indentity_service.dto.response.RoleResponse;
import com.example.Indentity_service.entity.Role;

@Mapper(componentModel = "spring")
public interface RoleMapper {
    @Mapping(target = "permissions", ignore = true)
    Role toRole(RoleRequest request);

    RoleResponse toRoleResponse(Role role);
}