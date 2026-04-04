package com.example.Indentity_service.dto.response;

import java.util.Set;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserResponse {
    String id;
    String username;
    String firstName;
    String lastName;
    String email;
    Set<RoleResponse> roles;
}
